// Require express
const express = require('express');
const router = express.Router();

// ESPACE DE REQUIRE POUR LES CONTROLLERS
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const lessonController = require('./controllers/lessonController');
const askController = require('./controllers/askController');
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
router.get('/askList', homeController.showAsk);

// LES ROUTES CONCERNANT LESSON
router.post('/user/:id/lesson', lessonController.addLesson);
router.patch('/user/:id/lesson/:Id', lessonController.changeLesson);
router.delete('/user/:id/lesson/:Id', lessonController.deleteLesson);
router.post('/user/:id/lesson/:Id/category', lessonController.addCategoryToLesson);
router.delete('/user/:id/lesson/:Id/category/:ID', lessonController.deleteCategoryToLesson);

// LES ROUTES CONCERNANT ASK
router.post('/user/:id/ask', askController.addAsk);
router.patch('/user/:id/ask/:Id', askController.changeAsk);
router.delete('/user/:id/ask/:Id', askController.deleteAsk);
router.post('/user/:id/ask/:Id/category', askController.addCategoryToAsk);
router.delete('/user/:id/ask/:Id/category/:ID', askController.deleteCategoryToAsk);



// Route 404
router.use( (req,res) => {res.status(404).send('404')} );


module.exports = router;