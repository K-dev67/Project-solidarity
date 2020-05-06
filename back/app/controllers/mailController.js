const dataMapper = require('../dataMapper');
const mail = require('../middlewares/mailer');

const mailController = {

    subscribeToLesson: (req, res) => {
        dataMapper.getNextLessonList((error, data) => {
            if (error) {
                console.trace(error);
                res.send(error);
            }
            if ( data.rowCount === 0) {
                return res.send("Il n'y a pas de cours");
            } 
            data.rows.forEach(element => {
                console.log(element.email);
                mail.subscribe(element.email);
            });     
            //dataMapper.
            // A MODIFIER POUR LINSTANT SA SELECTIONNE TOUT
            /*UPDATE "user_subscribe_lesson"
            SET status = 'envoyé'
            FROM lesson
            WHERE plannified BETWEEN now() AND now() + interval '2 hours' AND user_subscribe_lesson.status = 'todo';*/
            res.send('done');
        });
    },

};

module.exports = mailController;