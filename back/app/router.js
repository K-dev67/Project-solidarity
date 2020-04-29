// Require express
const express = require('express');
const router = express.Router();

// ESPACE DE REQUIRE POUR LES CONTROLLERS
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const lessonController = require('./controllers/lessonController');
// ESPACE DE REQUIRE POUR LES MIDDLEWARES

// LES ROUTES
router.get('/homePage', homeController.homePage);

// LES ROUTES DE CONNECTION 
router.get('/signup', authController.signupPage);
router.get('/login', authController.showLoginForm);
router.post('/signup', authController.signupAction);
router.post('/login', authController.loginAction);
router.get('/activation/user/:email', authController.activation);

// LES ROUTES D'AFFICHAGE
router.get('/teacherList', homeController.showTeacher);

// LES ROUTES CONCERNANT LESSON
router.post('/user/:id/lesson', lessonController.addLesson);
router.patch('/user/:id/lesson/:Id', lessonController.changeLesson);
router.delete('/user/:id/lesson/:Id', lessonController.deleteLesson);



// Route 404
router.use( (req,res) => {res.status(404).send('404')} );


module.exports = router;