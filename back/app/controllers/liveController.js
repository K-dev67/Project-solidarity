const dataMapper = require('../dataMapper');

const liveController = {

    // '/liveLesson' => Affiche tout les cours en live
    showAllLiveLesson: (req, res) => {
        dataMapper.getLiveLessonList((error, data) => { 
            if (error) {
                console.trace(error);
                res.send(error);
            }
            if (data.rowCount === 0) {
                return res.send('Pas de cour en live');
            }
            res.send('Les cours en live');
        });
    },
    // '/liveLesson/:id' => Affiche la tchatRoom du cours en question
    showThisLiveLesson: (req, res) => {
        const liveLessonId = req.params.id;
        dataMapper.getLesson(liveLessonId, (error, data) => { 
            if (error) {
                console.trace(error);
                res.send(error);
            }
            if (data.rowCount === 0) {
                return res.send('Pas de cour en live');
            }
            res.send(data.rows[0]);
        });
    },
    // '/calendar' =>  Affiche le calendrier des cours
    showCalendar: (req, res) => {

        dataMapper.getAllPlanedLesson((error, data) => { 
            if (error) {
                console.trace(error);
                res.send(error);
            }
            if (data.rowCount === 0) {
                return res.send('Pas de cour prévue');
            }
            res.send(data.rows);
        });
    },
    // '/user/:id/lesson/:Id/subscribe' => S'inscrire a une lesson
    subscribeLesson: (req, res) => {

       const userId = req.params.id;
       const lessonId = req.params.Id;

       dataMapper.getUserId(userId, (error, data) => {
        if (error) {
            console.trace(error);
            res.send(error);
        }
        if (data.rowCount === 1) {
            dataMapper.getLesson(lessonId, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
                if (data.rowCount === 1) {
                dataMapper.checkSubLesson(userId, lessonId, (error, data) => {
                        if (error) {
                            console.trace(error);
                            res.send(error);
                        }
                        if (data.rowCount === 0) {
                            
                            dataMapper.subToLesson(userId, lessonId, (error, data) => {
                                if (error) {
                                    console.trace(error);
                                    res.send(error);
                                }
                                if (data.rowCount === 0) {
                                    res.send("Vous n'etes pas inscrit");
                                }
                                if (data.rowCount === 1) {
                                    res.send('Vous etes bien inscrit');
                                }
                            });
                        } else {
                            res.send("Vous etes deja inscrit");
                        }
                });
            } else {
                res.send("Ce cours n'existe pas");
            }
        });
        } else {
            res.send("Cette utilisateur n'existe pas");
        }
    });
    },
    // '/user/:id/ask/:Id/subscribe' => permet de "s'inscrire" (envoie un mail avant le cour(mail non traité))'
    subscribeAsk: (req, res) => {

        const userId = req.params.id;
        const askId = req.params.Id;
        dataMapper.getUserId(userId, (error, data) => {
            if (error) {
                console.trace(error);
                res.send(error);
            }
            if (data.rowCount === 1) {
                dataMapper.getOnlyAskId(askId, (error, data) => {
                    if (error) {
                        console.trace(error);
                        res.send(error);
                    }
                    if (data.rowCount === 1) {
                        dataMapper.checkSubAsk(userId, askId, (error, data) => {
                             if (error) {
                                 console.trace(error);
                                 res.send(error);
                             }
                             if (data.rowCount === 0) {                                 
                                 dataMapper.subToAsk(userId, askId, (error, data) => {
                                     if (error) {
                                         console.trace(error);
                                         res.send(error);
                                     }
                                     if (data.rowCount === 0) {
                                         res.send("Vous n'etes pas inscrit");
                                     }
                                     if (data.rowCount === 1) {
                                        dataMapper.addOneLike(askId, (error, data) => {
                                            if (error) {
                                                console.trace(error);
                                                res.send(error);
                                            } else {
                                                res.send("Un like en plus");
                                            }
                                            });
                                        }
                                    });
                                } else {
                                    res.send("Vous etes deja inscrit");
                                }
                        });
                    } else {
                        res.send("Cette demande n'existe pas");
                    }
                });
            } else {
                res.send("Cette utilisateur n'existe pas")
            }
        });
     },
     // '/user/:id/lesson/:Id/subscribe' => Se désinscrire d'un cour
     unsubLesson: (req, res) => {

        const userId = req.params.id;
        const lessonId = req.params.Id;
        dataMapper.checkSubLesson(userId, lessonId, (error, data) => {
             if (error) {
                 console.trace(error);
                 res.send(error);
             }
             if (data.rowCount === 1) {
                 
                 dataMapper.unsubToLesson(userId, lessonId, (error, data) => {
                     if (error) {
                         console.trace(error);
                         res.send(error);
                     }
                     if (data.rowCount === 1 || data.rowCount > 1) {
                         res.send("Vous n'etes plus inscrit");
                     }
                 });
             } else {
                 res.send("Vous n'etes pas inscrit");
             }
        });
     },
     // '/user/:id/ask/:Id/subscribe' => Permet de se "désinscrire d'une demande de cours"
     unsubAsk: (req, res) => {

        const userId = req.params.id;
        const askId = req.params.Id;
        dataMapper.checkSubAsk(userId, askId, (error, data) => {
             if (error) {
                 console.trace(error);
                 res.send(error);
             } 
             if (!data) {
                 res.send("L'utilisateur ou la dmeande n'existe pas");
             }
             if (data.rowCount === 1) {
                 
                 dataMapper.unsubToAsk(userId, askId, (error, data) => {
                     if (error) {
                         console.trace(error);
                         res.send(error);
                     }
                     if (data.rowCount === 1 || data.rowCount > 1) {
                         dataMapper.deleteOneLike(askId, (error, data) => {
                            if (error) {
                                console.trace(error);
                                res.send(error);
                            } else {
                                res.send("Un like en moins");
                            }
                         });
                     }
                 });
             } else {
                 res.send("Vous n'etes pas inscrit");
             }
        });
     }
};

module.exports = liveController;