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
                        res.send('Votre demande est enregistré');
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
};

module.exports = askController;