const dataMapper = require('../dataMapper');
//const io =

const socketController = {

    socket: (req, res) => {
        res.send('Hello Socket');
        io.on('connection', (socket) => {
            socket.emit('news', { hello: 'world' });
            socket.on('my other event', (data) => {
              console.log(data);
              //socket.on('disconnect', () => {bye: 'bye'});
          });
    });

    },
};

module.exports = socketController;