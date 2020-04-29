const dataMapper = require('../dataMapper');

const lessonController = {

    addLesson: async  (req, res) => {
        try {
            const lessonInfo = req.body;
            const teacherId = req.params.id;
            let lessonStatus = null;

            let errorsList = [];

            if (!lessonInfo.title) {
                errorsList.push("Il manque un titre");
            }
            if (!lessonInfo.description) {
                errorsList.push("Il manque une description");
            }
            if (!lessonInfo.level) {
                errorsList.push("Vous n'avez pas indiqué la difficulté");
            }
            if (!lessonInfo.plannified) {
                lessonInfo.plannified = null;
            }
            if (lessonInfo.plannified === null && !lessonInfo.videos) {
                errorsList.push("Vous pouvez soit : plannifié votre cours, soit ajouté votre cours directement. Les cours vide ne sont pas autorisé");
            }
            if (!lessonInfo.videos) {
                lessonInfo.videos = null;
            }
            if (lessonInfo.videos !== null && lessonInfo.plannified !== null) {
                errorsList.push("Vous pouvez soit plannifié un live, soit ajouté une videos. Vous ne pouvez pas faire les deux en même temps.");
            }
            if (lessonInfo.plannified === null) {
                lessonStatus = 'replay';
            }
            if (lessonInfo.plannified !== null) {
                lessonStatus = 'plannifié';
                //console.log(lessonStatus);
            }

            if (errorsList.length === 0) {
                const newLesson = {
                    title: lessonInfo.title,
                    description: lessonInfo.description,
                    level: lessonInfo.level,
                    plannified: lessonInfo.plannified,
                    videos:lessonInfo.videos,
                    status: lessonStatus,
                    teacher_id: teacherId,
                }
                dataMapper.addLessonOnDB(newLesson, (error, data) => {
                    if (error) {
                        console.log(error);
                        res.send(error);
                    }
                    console.log(data)
                    //if (data.rowCount === 1) {
                        res.send('Cours enregistrer');
                    //}

                });
            } else {
                res.send(errorsList);
            }
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },
}

module.exports = lessonController;