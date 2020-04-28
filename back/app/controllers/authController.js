const dataMapper = require('../dataMapper');
const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');

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
                        res.send(newUser);

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
};

module.exports = authController;