// Require express
const express = require('express');
const router = express.Router();

// ESPACE DE REQUIRE POUR LES CONTROLLERS
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const lessonController = require('./controllers/lessonController');
const askController = require('./controllers/askController');
const userController = require('./controllers/userController');
const liveController = require('./controllers/liveController');
// ESPACE DE REQUIRE POUR LES MIDDLEWARES

// LES ROUTES

// LES ROUTES DE CONNECTION 
router.get('/signup', authController.signupPage);
router.get('/login', authController.showLoginForm);
router.post('/signup', authController.signupAction);
router.post('/login', authController.loginAction);
router.get('/activation/user/:email', authController.activation);
router.post('/forgetPassword', authController.askEmail);
router.post('/forgetPassword/:passPhrase', authController.forgetPassword);

// LES ROUTES D'AFFICHAGE
router.get('/homePage', homeController.homePage);
router.get('/teacherList', homeController.showTeacher);
router.get('/lessonList', homeController.showLesson);
router.post('/lessonList', homeController.showLessonByCategory);
router.get('/askList', homeController.showAsk);
router.post('/askList', homeController.showAskByCategory);

// LES ROUTES CONCERNANT LESSON
router.post('/user/:id/lesson', lessonController.addLesson);
router.patch('/user/:id/lesson/:Id', lessonController.changeLesson);
router.delete('/user/:id/lesson/:Id', lessonController.deleteLesson);
router.post('/user/:id/lesson/:Id/category', lessonController.addCategoryToLesson);
router.delete('/user/:id/lesson/:Id/category/:ID', lessonController.deleteCategoryToLesson);
router.get('/lesson/:id', lessonController.showThisLesson);

// LES ROUTES CONCERNANT ASK
router.post('/user/:id/ask', askController.addAsk);
router.patch('/user/:id/ask/:Id', askController.changeAsk);
router.delete('/user/:id/ask/:Id', askController.deleteAsk);
router.post('/user/:id/ask/:Id/category', askController.addCategoryToAsk);
router.delete('/user/:id/ask/:Id/category/:ID', askController.deleteCategoryToAsk);

// lES ROUTES CONCERNANT LE LIVE
router.get('/liveLesson', liveController.showAllLiveLesson);
router.get('/liveLesson/:id', liveController.showThisLiveLesson);
router.get('/calendar', liveController.showCalendar);
router.get('/user/:id/lesson/:Id/subscribe', liveController.subscribeLesson);
router.delete('/user/:id/lesson/:Id/subscribe', liveController.unsubLesson);
router.get('/user/:id/ask/:Id/subscribe', liveController.subscribeAsk);
router.delete('/user/:id/ask/:Id/subscribe', liveController.unsubAsk);


// LES ROUTES CONCERNANT LES USER
router.get('/profile/:id', userController.showProfile);
router.patch('/profiluser/:id', userController.changeProfile);


// Route 404
router.use( (req,res) => {res.status(404).send('404')} );


module.exports = router;