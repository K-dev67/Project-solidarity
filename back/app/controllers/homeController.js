const dataMapper = require('../dataMapper');

const homeController = {
    // Fonction de la Page d'accueil Recupere un nombre defini de ( dans l'ordre) : User, Lesson, Ask, Category
    homePage: (req, res) => {
        dataMapper.getFourUser((error, data) => { // Requete pour recuperer USER
            if (error) {
                console.trace(error);
                res.send(error);
            }
            const dataUser = data.rows;
            dataMapper.getFourLesson((error, data) => { // Requete pour recuperer LESSON
                if (error){
                    console.trace(error);
                    res.send(error);
                }
                const dataLesson = data.rows;
                //res.send( {dataLesson, dataUser});
                dataMapper.getFourAsk((error, data) => { // Requete pour recuperer ASK
                    if (error) {
                        console.trace(error);
                        res.send(error);
                    }
                    const dataAsk = data.rows;
                    dataMapper.getFourCategory((error, data) => { // Requete pour recuperer Category
                        if (error) {
                            console.trace(error);
                            res.send(error);
                        }
                        const dataCategory = data.rows;
                        res.send({dataUser, dataLesson, dataAsk, dataCategory});
                    });
                });
            });
        });
    },
    
    showTeacher: (req, res) => {
        dataMapper.getTeacherList((error, data) => { 
            if (error) {
                console.trace(error);
                res.send(error);
            }
            res.send(data.rows);
        });
    },
    showAsk: (req, res) => {
        dataMapper.getAskList((error, data) => { 
            if (error) {
                console.trace(error);
                res.send(error);
            }
            res.send(data.rows);
        });
    },

};

module.exports = homeController;