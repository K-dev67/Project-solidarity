const dataMapper =require('../dataMapper');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const sendMail = require('../middlewares/mailer');
const userController = {

    showProfile: async (req, res) => {
        try {

            const userId = req.params.id;
            dataMapper.getUserId(userId, (error, data) => {
                if (error) {
                    console.log(error);
                    return res.send(error);
                }
                if (data.rowCount === 0) {
                    return res.send("Cette utilisateur n'existe pas");
                }
                res.send(data.rows);
            })
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    changeProfile: async (req, res) => {
        try {
            const userId = req.params.id;
            const info = req.body;
            let userStatus = 'activé';
            let errorsList = [];

                await dataMapper.getUserId(userId, (error, data) => {
                    if (error) {
                        console.trace(error);
                        res.send(error);
                    }
                    if (data.rowCount === 0) {
                        return res.send("Cette utilisateur n'existe pas")
                    }
                    if (!info.email) {
                        return res.send('Erreur')
                    }
                    const user = data.rows[0];
                    dataMapper.checkEmailUpdate(info, (error, data) => {
                        if (error) {
                            console.trace(error);
                            res.send(error);
                        }
                        /*if () {
                            return res.send('')
                        }*/
                        const mail = data.rows;
                        if (mail.rowCount === 1 && user.email !== info.email) {
                            errorsList.push("Cette email existe déja");
                        }
                            dataMapper.checkName(info.nickname, (error, data) => {
                                if (error) {
                                    console.trace(error);
                                    res.send(error);
                                }
                                const nickname = data;
                                console.log('nickname', nickname);
                                if (mail.rowCount === 0) {
                                    userStatus = 'a validé'
                                }
                                if (mail.email === info.email && user.email !== info.email) {
                                    errorsList.push('Cette email existe déja');
                                }
                                if (nickname.rowCount === 1 && user.nickname !== info.nickname) {
                                    errorsList.push('Ce pseudo existe déjâ');
                                }
                                if (!info.nickname) {
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
                                if (!bcrypt.compareSync(info.password, user.password ) ) {
                                    return res.send("Mauvais mot de passe");
                                }
                                // FRONT = METTRE laissez vide pour garder votre mdp actuel
                                if (!info.newpassword) {
                                    info.newpassword = info.password;
                                }
                                if (info.newpassword.length < 8) {
                                    errorsList.push("Le mot de passe doit contenir un minimum de 8 caracteres")
                                }
                                if (info.email !== user.email) {
                                    userStatus = 'a validé';
                                }
                                if (errorsList.length === 0) {
                                    const updateUser = {
                                        nickname: info.nickname,
                                        firstname: info.firstname,
                                        lastname: info.lastname,
                                        email: info.email,
                                        password: bcrypt.hashSync(info.newpassword, 10),
                                        role: 'user',
                                        status: userStatus,
                                        avatar: info.avatar
                                    }
                                            dataMapper.updateUser(updateUser,userId, (error, data) => {
                                                if (error) {
                                                    console.trace(error);
                                                    res.send(error);
                                                }
                                                console.log(data);
                                                if (data.rowCount === 0 ) {
                                                    return res.send("Rien a était modifier")
                                                }
                                                if (userStatus === 'a validé') {
                                                    sendMail.mailer(updateUser.email)
                                                    console.log("email envoyé")
                                                }
                                                if (data.rowCount === 1) {
                                                    return res.send("Vos modifications on bien était enregistrer");
                                                }
                                            });
                                } else {
                                    return res.send(errorsList);
                                }
                            });
                    });
                });
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },
};

module.exports = userController;