const dataMapper = require('../dataMapper');

const liveController = {

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