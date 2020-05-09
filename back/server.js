require('dotenv').config();


const express = require('express');
const session = require('express-session');


const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const app = express();

const Server = require('http').Server;
const socket = require('socket.io');

const server = Server(app);
const io = socket(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
 });
//! Rajout Kevin 6:00

//const socketController = require('./app/controllers/socketController');
//io.on('connection', socketController.respond);

// A test
/*const chatRoom = io
 .of('/') // <== Ici mettre le namespace lessons // meme en front
 .on('connection', (socket) => {
   socket.on('joinRoom', ({username, room }) => {
     socketController.respond(chat,socket);
   })
 });*/

 const dataMapper = require('./app/dataMapper');

 const formatMessage = require('./app/utils/messages');
 const {
   userJoin,
   getCurrentUser,
   userLeave,
   getRoomUsers
 } = require('./app/utils/users');

 const botName = 'El Boto'

io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room}) => {

    //console.log(username, room);

    const userId = username.id;
    //console.log('userId', userId);
    const user = userJoin(socket.id, username.nickname, userId, room);

    console.log('user', user);

    socket.join(user.room);
    console.log('Bienvenue dans le chat');
    socket.emit('message',formatMessage(botName, `Welcome to the Chat ! ${room}`));

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
  });



  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit('message', formatMessage(user.username, msg.content));
  });

  /*const userId = username.id;
  dataMapper.putMsgOnDb(message, (error, data) => {
  if (error) {
  console.trace(error);
  res.send(error);
  }
  });*/

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
});



//! ----------------



// == config cors
app.use(bodyParser.json()); // => req.body va contenir le JSON de la req
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Access-Control-Allow-Headers, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS, PUT, DELETE');
    if (req.method === "OPTIONS") {
        return res.status(200).send("OK");
      }
    next();
  });


app.use(express.urlencoded({extended:true}));

const router = require('./app/router');

app.use(session({
    secret: 'je suis la phrase du site solidarité',
    resave: true,
    saveUnitialized:true,
    cookie: {
        secure: false,
        maxAge: (1000*60*60)
    }
}));


//! à mettre dans un midlleware

  /*
 * Serveur central Socket.IO
 */

//! --const dataMapper = require('./app/dataMapper');
// let id = 0;
// io.on('connection', (ws) => {
//   console.log('SocketIO - new client conncect');

//   //const messages = getMessage((error, data) => { const message = data.rows});
// })
//* test antho

/*
 * Serveur central Socket.IO
 */
// IDs uniques des messages échangés à travers le serveur central
//let id = 0;
// Lorsqu'un client demande à se connecter au serveur central...
//! --io.on('connection', (ws) => {
  // Le callback reçoit en paramètre le WebSocket (WS) créé sur-mesure
  //! --console.log('>> Socket.IO - new client connected');
  // Lorsque le client connecté envoie un message au serveur central sur son WS
  //! --ws.on('send_message', (message) => {
    // Objectif du serveur central : générer un ID unique pour le message reçu,
    // et transmettre le message.
    // eslint-disable-next-line no-plusplus
    // ID unique rattaché au message reçu
    //! --console.log('message', message);
    //! --dataMapper.putMsgOnDb(message, (error, data) => {
      //! --if (error) {
        //! --console.trace(error);
        //! --res.send(error);
      //! --}
    //! --})
    //message.id = id+5;
    //! --io.emit('send_message', message);
    // Transmission du message aux clients connecté (io.emit et non pas ws.emit)
  //! --});

  // pour gerer la deco du user
   //* avoir une info quand le client ferme son onglet
   //! --ws.on('disconnect', () => {
    //! --console.log( 'user deco');
    //! --ws.disconnect;
  //! --})

//! --});

//! ---------------------------

app.use(router);

server.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);

});