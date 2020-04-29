const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const mail = require('../middlewares/mailer');

const authController = {


    signupPage: (req, res) => {
        res.send('signup page');
    },
    signupAction: async (req, res) => {
        try {
            const info = req.body;
            await dataMapper.checkEmail(info.email, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
                let errorsList = [];

                const userMail = data.rowCount;
                if ( userMail === 1) {
                    errorsList.push('Cet email existe déjâ');
                }
                dataMapper.checkName(info.pseudo, (error, data) => {
                    if (error) {
                        console.trace(error);
                        res.send(error);
                    }
                    const userPseudo = data.rowCount;
                    if (userPseudo === 1) {
                        errorsList.push('Ce pseudo existe déjâ');
                    }
                    if (!info.pseudo) {
                        errorsList.push("Le pseudo ne peut pas etre vide");
                    }
                    if (!info.firstname) {
                        errorsList.push("Le prénom ne peut pas etre vide");
                    }
                    if (!info.lastname) {
                        errorsList.push("Le nom ne peut pas etre vide");
                    }
                    if (!emailValidator.validate(info.email)) {
                        errorsList.push("L'email n'est pas un email valide");
                    }
                    if (info.password.length < 8) {
                        errorsList.push("Le mot de passe doit contenir un minimum de 8 caracteres");
                    } if (!info.avatar) {
                        //errorsList.push("L avatar ne peut pas etre vide");
                        info.avatar = 'No avatar'
                    }
                    if (info.password !== info.confirmpassword ){
                        errorsList.push("Le mot de passe et la confirmation ne correspondent pas")
                    }
                    if (errorsList.length === 0) {
                        const newUser = {
                            nickname: info.pseudo,
                            firstname: info.firstname,
                            lastname: info.lastname,
                            email: info.email,
                            password: bcrypt.hashSync(info.password, 10),
                            role: 'user',
                            status: 'a validé',
                            avatar: info.avatar
                        }
                        dataMapper.registerNewUser(newUser, (error, data) => {
                            if (error) {
                                console.trace(error);
                                res.send(error);
                            }
                            if (data.rowCount === 1) {
                                res.send('Compte crée avec succes')
                                // lancement mail
                                console.log(newUser);
                                mail.mailer(newUser.email);
                            }
                        })

                    } else {
                        res.send(errorsList);
                    }
                });
            });
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },

    showLoginForm: (req, res) => {
        res.send('login page');
    },

    loginAction: async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log('email', email);
            console.log('password', password);
            console.log(req.body);
            await dataMapper.checkEmail(email, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
                const user = data.rows[0];
                console.log('user', user)
                // console.log(user.password);
                if (!user) {
                    return res.send("Cet email n'existe pas");
                }
                if (!bcrypt.compareSync(password, user.password ) ) {
                    return res.send("Mauvais mot de passe");
                }
                res.send('Vous etes connecté :');
                req.session.user = user;
                console.log(req.session.user);
            })
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },
    activation: async (req, res) => {
        try {
            const emailAccount = req.params.email;
            dataMapper.updateStatusUser(emailAccount, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
                res.send('Votre compte est activé.')
            });
        } catch (error) {
            console.trace(error);
            console.log(error);
        }
    }
};
module.exports = authController;