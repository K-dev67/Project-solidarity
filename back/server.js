
require('dotenv').config();


const express = require('express');
const session = require('express-session');
const PORT = process.env.PORT || 8000;
const server = express();

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