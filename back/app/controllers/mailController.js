const dataMapper = require('../dataMapper');

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
            const allNextLesson = data.rows;
            console.log(allNextLesson);
            
            res.send('controller')
        });
    },

};

module.exports = mailController;