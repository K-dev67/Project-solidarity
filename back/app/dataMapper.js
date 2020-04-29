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
    getTeacherList: (callback) => {
        const query = 'SELECT DISTINCT "user".id, nickname,firstname, lastname,avatar FROM "user" JOIN lesson ON "user".id = lesson.teacher_id WHERE "teacher_id" IS NOT NULL';
        db_connection.query(query, callback);
    },
    updateStatusUser: (emailAccount, callback) => {
        const query = `UPDATE "user" SET "status" = 'activé' WHERE "email" = $1`;
        const values = [emailAccount];
        db_connection.query(query, values, callback);
    },
    addLessonOnDB: (newLesson, callback) => {
        const query = `INSERT INTO  "lesson"("title", "description", "level", "teacher_id", "plannified", "link_videos", "status") VALUES($1,$2,$3,$4,$5,$6,$7)`;
        const values = [newLesson.title, newLesson.description, newLesson.level,newLesson.teacher_id, newLesson.plannified, newLesson.videos, newLesson.status];
        db_connection.query(query, values, callback);
    },
    checkLessonId: (lessonId, userId, callback) => {
        const query = `SELECT * FROM "lesson" WHERE "id" = $1 AND teacher_id = $2;`;
        const values = [lessonId, userId];
        db_connection.query(query, values, callback);
    },
    updateLessonOnDB: (changeLesson, lessonId, callback) => {
        const query = `UPDATE "lesson" SET ("title", "description", "level", "teacher_id", "plannified", "link_videos", "status") = ($1,$2,$3,$4,$5,$6,$7) WHERE "id" = $8`
        const values = [changeLesson.title, changeLesson.description, changeLesson.level,changeLesson.teacher_id, changeLesson.plannified, changeLesson.videos, changeLesson.status, lessonId];
        db_connection.query(query, values, callback);
    },
    deleteLessonFromDB: (userId, lessonId, callback) => {
        const query = 'DELETE FROM lesson * WHERE "id" = $2 AND teacher_id = $1;';
        const values = [userId, lessonId];
        db_connection.query(query, values, callback);
    }
};

// J'exporte mon module
module.exports = dataMapper;