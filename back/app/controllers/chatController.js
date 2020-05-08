const dataMapper = require('../dataMapper');

const chatController = {

    //roomId: 0,
    getRoom: (req, res) => {
        const roomId = req.params.id;
        return res.send(roomId);
    },
};

module.exports = chatController;