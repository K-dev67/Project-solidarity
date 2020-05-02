const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const mail = require('../middlewares/mailer');

const authController = {

    passPhrase: () => {
        let longueur = 256,
          character = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
          value = character[Math.floor(Math.random() * character.length)],
          compteur = 1,
          number = '1234567890'+character
        for (; compteur < longueur; compteur++) {
        value += number[Math.floor(Math.random() * number.length)];
        }
        return value;
    },
    signupPage: (req, res) => {
        res.send('signup page');
    },
    signupAction: async (req, res) => {
        try {
            let randomRobot = Math.floor(Math.random() * 4) +1;
            const info = req.body;
            console.log('info', info)
            await dataMapper.checkEmail(info.email, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
                let errorsList = [];
                const userMail = data.rowCount;
                console.log('userMail', userMail)
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
                        info.avatar = `https://robohash.org/${info.pseudo}?sets=set${randomRobot}`;
                    }
                    if (info.password !== info.confirmpassword ){
                        errorsList.push("Le mot de passe et la confirmation ne correspondent pas")
                    }
                    console.log('errorsList', errorsList)
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
                        console.log('newUser', newUser)
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
                // if (error) {
                //     console.trace(error);
                //     res.send(error);
                // }
                // const user = data.rows[0];
                // console.log('user', user)
                // if (!user) {
                //     return res.send("Cet email n'existe pas");
                // }
                // if (!bcrypt.compareSync(password, user.password ) ) {
                //     return res.send("Mauvais mot de passe");
                // }
                // // res.send('Vous etes connecté :');
                // req.session.user = user;
                // res.send(user)
                // console.log(req.session.user);
                //! => => antho
                const user = data.rows[0];
                // on compare les 2 mot de passe => me renvoi un booleen
                const testPass = bcrypt.compareSync(password, user.password);
                // si mon user existe et mon mdp est good alors
                if (user && testPass) {
                    console.log('<< 200 OK', user);
                    req.session.user = user;
                    res.send(user);
                  } else {
                    // peu importe l'erreur
                    console.log('<< 401 UNAUTHORIZED');
                    res.status(401).end();
                  }
            })
        } catch (error) {
            console.log('<< 500 INTERNAL SERVER ERROR');
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
    },
    askEmail: async (req, res) => {
        try {
            const email = req.body.email;

            dataMapper.checkEmail(email, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
                if (data.rowCount === 0) {
                    return res.send("Cette email n'existe pas");
                }
                //const mail = data.rows[0];
                const passPhrase = authController.passPhrase();
                dataMapper.saveEmailPassPhrase(email, passPhrase, (error, data) => {
                    if (error) {
                        console.trace(error);
                        res.send(error);
                    }
                    const verif = {
                        email: email,
                        passphrase: passPhrase
                    };
                    mail.forgetPassword(verif);
                    res.send("Un email vous a était envoyé");
                });
            });
        } catch (error) {
            console.trace(error);
            console.log(error);
        }
    },
    forgetPassword: async (req, res) => {
        try {
            const passphrase = req.params.passPhrase;
            const email = req.body.email;
            const newpassword = bcrypt.hashSync(req.body.newpassword, 10);
            dataMapper.checkEmailPassphrase(email, passphrase, (error, data) => {
                if (error) {
                    console.trace(error);
                    res.send(error);
                }
                if (data.rowCount === 0) {
                    return res.send("Cette email et ce passphrase ne correspondent pas");
                }
                dataMapper.newPassword(email, newpassword, (error, data) => {
                    if (error) {
                        console.trace(error);
                        res.send(error);
                    }
                    if (data.rowCount === 0) {
                        return res.send("Rien a était modifié");
                    }
                    return res.send("Votre mot de passe a était modifié.")
                })
            });
        } catch (error) {
            console.trace(error);
            console.log(error);
        }
    }
};
module.exports = authController;