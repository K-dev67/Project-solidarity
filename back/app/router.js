// Require express
const express = require('express');
const router = express.Router();

// ESPACE DE REQUIRE POUR LES CONTROLLERS
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
// ESPACE DE REQUIRE POUR LES MIDDLEWARES

// LES ROUTES
router.get('/homePage', homeController.homePage);

// LES ROUTES DE CONNECTION 
router.get('/signup', authController.signupPage);
router.get('/login', authController.showLoginForm);
router.post('/signup', authController.signupAction);
router.post('/login', authController.loginAction);

router.get('/teacherList', homeController.showTeacher);


// Route 404
router.use( (req,res) => {res.status(404).send('404')} );


module.exports = router;