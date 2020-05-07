/*const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data) => {
    console.log(data);
  });
});*/


require('dotenv').config();


const express = require('express');
const session = require('express-session');
//const socket = require('socket.io');

// const Server = require('http').Server;

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const app = express();

const Server = require('http').Server;
const socket = require('socket.io');

const server = Server(app);
const io = socket(server);

// Est-ce que tu n’as pas oublié d’instancier ton serveur Socket.IO avec ton serveur HTTP ? Genre comme ça :
// var app = require('express')();
// var http = require('http').createServer(app);
// var io = require('socket.io').listen(server);



// const app = Server(server);
// //const io = socket(app).listen(app);
// const io = require('socket.io').listen(app);




//! ----------------
// Ca normalement ça dégage :)

// app.get('/', (req, res) => {
//   //res.sendFile(__dirname + '/index.html');
//   res.send('hello world')
// });
// io.on('connection', (ws) => {
//   ws.emit('news', { hello: 'world', console: console.log('helloconsole') });
//   ws.on('my other event', (data) => {

//     console.log(data);
//   ws.on('disconnect', () => {bye: 'bye'});
//   });
// });



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

app.use(router);


server.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);

});



