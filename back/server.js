
require('dotenv').config();


const express = require('express');
const session = require('express-session');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8000;
const server = express();

// == config cors
server.use(bodyParser.json()); // => req.body va contenir le JSON de la req
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Access-Control-Allow-Headers, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    if (req.method === "OPTIONS") {
        return res.status(200).send("OK");
      }
    next();
  });


server.use(express.urlencoded({extended:true}));

const router = require('./app/router');

server.use(session({
    secret: 'je suis la phrase du site solidarité',
    resave: true,
    saveUnitialized:true,
    cookie: {
        secure: false,
        maxAge: (1000*60*60)
    }
}));

server.use(router);

server.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});