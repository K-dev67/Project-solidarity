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
    }
    
};

module.exports = liveController;