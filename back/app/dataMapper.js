// Require ma connection a la DB
const db_connection = require('./db_connection');

// Je creer mon dataMapper :

const dataMapper = {
    getFourUser: (callback) => {
        const query = 'SELECT * FROM "user" LIMIT 4';
        db_connection.query(query, callback);
    },
    getFourLesson: (callback) => {
        const query = 'SELECT * FROM lesson LIMIT 4';
        db_connection.query(query, callback);
    },
    getFourAsk: (callback) => {
        const query = 'SELECT * FROM ask LIMIT  4';
        db_connection.query(query, callback);
    },
    getFourCategory: (callback) => {
        const query = 'SELECT * FROM category LIMIT 4';
        db_connection.query(query, callback);
    },
    checkEmail: (email, callback) => {
        const query = 'SELECT * FROM "user" WHERE email = $1';
        const values = [email];
        db_connection.query(query, values, callback);
    },
    checkName: (name, callback) => {
        const query = 'SELECT * FROM "user" WHERE nickname = $1';
        const values = [name];
        db_connection.query(query, values, callback);
    },
    registerNewUser: (newUser, callback) => {
        const query = 'INSERT INTO "user"("nickname","firstname","lastname","email","avatar","password","role","status")VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
        const values = [newUser.nickname, newUser.firstname, newUser.lastname, newUser.email,
        newUser.avatar,newUser.password, newUser.role, newUser.status,];
        db_connection.query(query, values, callback);
    },
};

// J'exporte mon module
module.exports = dataMapper;