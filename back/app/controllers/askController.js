const dataMapper = require('../dataMapper');

const askController = {

    addAsk: async  (req, res) => {
        try {
            const askInfo = req.body;
            const authorId = req.params.id;

            let errorsList = [];

            if (!askInfo.title) {
                errorsList.push("Il manque un titre");
            }
            if (!askInfo.description) {
                errorsList.push("Il manque une description");
            }
            if (!askInfo.level) {
                errorsList.push("Vous n'avez pas indiqué la difficulté");
            }

            if (errorsList.length === 0) {
                const newAsk = {
                    title: askInfo.title,
                    description: askInfo.description,
                    level: askInfo.level,
                    status: 'actif',
                    author_id: authorId,
                    want_it: 1
                }
                dataMapper.addAskOnDB(newAsk, (error, data) => {
                    if (error) {
                        console.log(error);
                        res.send(error);
                    }
                    console.log(data)
                    if (data.rowCount === 1) {
                        //res.send('Votre demande est enregistré');
                        dataMapper.getAskByName(askInfo, (error, data) => {
                            if (error) {
                                console.log(error);
                                res.send(error);
                            }
                            if (data.rowCount === 0) {
                                return res.send("Erreur category");
                            }
                            const newInfo = data.rows[0];
                            console.log('newInfo', newInfo);
                            dataMapper.checkCatName(askInfo, (error, data) => {
                                if (error) {
                                    console.log(error);
                                    res.send(error);
                                }
                                if (data.rowCount === 0) {
                                    return res.send("Erreur category");
                                }
                                const categoryInfo = data.rows[0];
                                console.log('categoryInfo',categoryInfo);
                                dataMapper.addCatToAsk(newInfo, categoryInfo, (error, data) => {
                                    if (error) {
                                        console.log(error);
                                        res.send(error);
                                    }
                                    res.send("Cours et category ajouté"); 
                                });
                            });
                        });
                    }

                });
            } else {
                res.send(errorsList);
            }
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },
    changeAsk: async (req, res) => {
        try {

            const userId = req.params.id;
            const askId = req.params.Id;
            const askInfo = req.body;
            // Si modification = like reset ? 
            await dataMapper.checkAskId(askId, userId, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                } 
                let errorsList = [];
                if (data.rowCount === 0) {
                    return res.send("Ce n'est pas votre demande.");
                }
                if (!askInfo.title) {
                    errorsList.push("Il manque un titre");
                }
                if (!askInfo.description) {
                    errorsList.push("Il manque une description");
                }
                if (!askInfo.level) {
                    errorsList.push("Vous n'avez pas indiqué la difficulté");
                }
                if (errorsList.length === 0) {
                    const changeAsk = {
                        title: askInfo.title,
                        description: askInfo.description,
                        author_id: userId,
                        want_it: 1,
                        level: askInfo.level,
                        status: 'actif',
                    }
                    dataMapper.updateAskOnDB(changeAsk, askId, (error, data) => {
                        if (error) {
                            console.log(error);
                            res.send(error);
                        }
                        console.log(data)
                        if (data.rowCount === 1) {
                           res.send('Demande modifié');
                        }
                    });
                } else {
                    res.send(errorsList);
                }
            });    
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    deleteAsk: async (req, res) => {
        try {
            const userId = req.params.id;
            const askId = req.params.Id;
            dataMapper.checkAskId(askId, userId, (error, data) => {
                if (error) {
                    console.log(error);
                    res.send(error);
                }
                if (data.rowCount === 0) {
                    return res.send("Cette demande n'existe pas");
                }
                const askInfo = data.rows[0];

                dataMapper.deleteAllRelationAsk(askInfo, (error, data) => {
                    if (error) {
                        console.log(error);
                        res.send(error);
                    }
                    dataMapper.deleteAskFromDB(userId, askId, (error, data) => {
                        if (error) {
                            console.log(error);
                            res.send(error);
                        }
                        if (data.rowCount === 0) {
                            return res.send("Ce n'est pas supprimé");
                        }
                        if (data.rowCount === 1) {
                            res.send("Demande Supprimé");
                        }
                        console.log(data);
                    });
                });
            });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    addCategoryToAsk: async (req, res) => {
        try {

            const userId = req.params.id;
            const askId = req.params.Id;
            const infoCategory = req.body;

            dataMapper.checkCategoryName(infoCategory, (error, data) => {
                if (error) {
                    console.log(error);
                    res.send(error);
                } 
                if (data.rowCount === 0) {
                    return res.send("Cette catégorie n'existe pas");
                }
                const category = data.rows[0];
                
                dataMapper.checkAskId(askId, userId, (error, data) => {
                    if (error) {
                        console.log(error);
                        res.send(error);
                    }
                    if (data.rowCount === 0) {
                        return res.send("Ce n'est pas votre cours.");
                    }
                    dataMapper.checkIfRelationAskCategoryExist(askId, category,(error, data) => {
                        if (error) {
                            console.log(error);
                            res.send(error);
                        }
                        if (data.rowCount === 1 || data.rowCount > 1){
                            return res.send("Cette relation existe déja");
                        }
                        dataMapper.addRelationAskCategory(askId, category, (error, data) => {
                            if (error) {
                                console.log(error);
                                res.send(error);
                            }
                            if (data.rowCount === 0) {
                                return res.send("La relation n'a pas était ajouté");
                            }
                            if (data.rowCount === 1 || data.rowCount < 1) {
                                res.send("Category ajouté avec succes a votre demande.");
                            }
                        });
                    });
                });
            });

        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    deleteCategoryToAsk: async (req, res) => {
        try {

            const userId = req.params.id;
            const askId = req.params.Id;
            const categoryId = req.params.ID;
            
            dataMapper.checkAskId(askId, userId, (error, data) => {
                if (error) {
                    console.log(error);
                    res.send(error);
                }
                if (data.rowCount === 0) {
                    return res.send("Ce n'est pas votre cours");
                }
                dataMapper.deleteAskId(askId, categoryId, (error, data) => {
                    if (error) {
                        console.log(error);
                        res.send(error);
                    }
                    if (data.rowCount === 0) {
                        return res.send("La catégory n'existe pas");
                    }
                    if (data.rowCount === 1) {
                        return res.send("Demande de Cour supprimé avec succes");
                    }
                });
            });
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    }
};

module.exports = askController;