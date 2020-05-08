/*const dataMapper = require('../dataMapper');

module.exports.respond = function(endpoint, socket) {
    console.log('>> Socket.IO - new client connected');
  // Lorsque le client connecté envoie un message au serveur central sur son WS
  socket.on('send_message', (message) => {
    // Objectif du serveur central : générer un ID unique pour le message reçu,
    // et transmettre le message.
    // eslint-disable-next-line no-plusplus
    // ID unique rattaché au message reçu
    console.log('message', message);
    dataMapper.putMsgOnDb(message, (error, data) => {
      if (error) {
        console.trace(error);
        res.send(error);
      }
    })
    //message.id = id+5;
    endpoint.emit('send_message', message);
    // Transmission du message aux clients connecté (io.emit et non pas ws.emit)
  });
  // pour gerer la deco du user
   //* avoir une info quand le client ferme son onglet
   socket.on('disconnect', () => {
    console.log( 'user deco');
    socket.disconnect;
  });

};*/
//! -- Au dessus = fonctionnel 7:32



/*const dataMapper = require('../dataMapper');
const chatRoom = require('./chatController');

module.exports.respond = function(endpoint, socket) {
    //Demander a antho d'envoyer l'id de la room
    //getRoom(req, res);
    //const roomId = req.params.id;
    console.log('>> Socket.IO - new client connected');
  // Lorsque le client connecté envoie un message au serveur central sur son WS
    
    endpoint.on('connection', function(socket){ // on se connecte a la room 19
        socket.join(`/19`);
    });
        socket.to('/19').on('send_message', (message) => {
            console.log('message', message);
            
            dataMapper.putMsgOnDb(message, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
            });
            //endpoint.in('/19').emit('send_message', message);
            
            endpoint.in('/19').emit('send_message', message);
                
              
        });

        socket.on('send_message2', (message2) => {
            console.log('message2', message2);
            dataMapper.putMsgOnDb(message2, (error, data) => {
            if (error) {
                
                console.trace(error);
            res.send(error);
            }
            })
            endpoint.emit('send_message2', message2);
            });

        //! socket.on('send_message', (message) => {
            // Objectif du serveur central : générer un ID unique pour le message reçu,
            // et transmettre le message.
            // eslint-disable-next-line no-plusplus
            // ID unique rattaché au message reçu
            
        //!    console.log('message', message);
        //!    dataMapper.putMsgOnDb(message, (error, data) => {
        //!    if (error) {
                //!console.trace(error);
                //!res.send(error);
         //!   }
        //!    })
            //message.id = id+5;
            //!endpoint.emit('send_message', message);
            // Transmission du message aux clients connecté (io.emit et non pas ws.emit)
        //!});
        // pour gerer la deco du user
        //!//* avoir une info quand le client ferme son onglet
        socket.on('disconnect', () => {
            console.log( 'user deco');
            socket.disconnect;
        });

};*/


const dataMapper = require('../dataMapper');

const formatMessage = require('../utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('../utils/users');

const botName = 'El Boto'
module.exports.respond = function(endpoint, socket) {

  const user = userJoin(socket.id, username, room);

  socket.join(user.room);

  socket.emit('message',formatMessage(botName, 'Welcome to the Chat !'));

  socket.broadcast
    .to(user.room)
    .emit(
      'message',
      formatMessage(botName, `${user.username} has joined the chat`)
    );

    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });


    socket.on('chatMessage', msg => {
      const user = getCurrentUser(socket.id);
      io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    socket.on('disconnect', () => {
      const user = userLeave(socket.id);
      if (user) {
        io.to(user.room).emit(
          'message',
          formatMessage(botName, `${user.username} has left the chat`)
        );
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
    });
  }
  });
};