const dataMapper =require('../dataMapper');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const sendMail = require('../middlewares/mailer');
const userController = {

    // '/profile/:id' => Affiche le profile du user correspondant a l'id
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
    // '/profiluser/:id' => Permet de modifié son profil
    changeProfile: async (req, res) => {
        try {
            const userId = req.params.id;
            const info = req.body;
                await dataMapper.getUserId(userId, (error, data) => {
                    if (error) {
                        console.trace(error);
                        res.send(error);
                    }
                    if (data.rowCount === 0) {
                        return res.send("Cette utilisateur n'existe pas")
                    }
                    const user = data.rows[0];
                            dataMapper.checkName(info.nickname, (error, data) => {
                                if (error) {
                                    console.trace(error);
                                    res.send(error);
                                }
                                const nickname = data;
                                if (nickname.rowCount === 1 && user.nickname !== info.nickname) {
                                    return res.send('Ce pseudo existe déjâ');
                                }
                                    for (let [keyInfo, valueInfo] of Object.entries(info)) {
                                        if (!valueInfo) {
                                            console.log('info manquante')
                                        } else {
                                            user[keyInfo] = valueInfo;
                                        }
                                    }
                    dataMapper.updateUser(user,userId, (error, data) => {
                        if (error) {
                            console.trace(error);
                            res.send(error);
                        }
                        if (data.rowCount === 0 ) {
                            return res.send("Rien a était modifier")
                        }
                        return res.send("C'est bien mis a jour");
                    });
                });
            });
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },
};
                    // A GARDER POUR CHANGER SON EMAIL
                    /*dataMapper.checkEmail(info.email, (error, data) => {
                        if (error) {
                            console.trace(error);
                            res.send(error);
                        }
                        /*if () {
                            return res.send('')
                        }*/
                        /*const mail = data.rows;
                        if (mail.rowCount === 1 && user.email !== info.email) {
                            errorsList.push("Cette email existe déja");
                        }*/
                    /*if (mail.rowCount === 0) {
                                    userStatus = 'a validé'
                                }
                                if (mail.email === info.email && user.email !== info.email) {
                                    errorsList.push('Cette email existe déja');
                                }
                                */
                                /*if (!info.nickname) {
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
                                }*/
                                /* if (!info.avatar) {
                                    //errorsList.push("L avatar ne peut pas etre vide");
                                    info.avatar = 'No avatar'
                                }*/
                                
                                /*if (info.password !== info.confirmpassword ){
                                    errorsList.push("Le mot de passe et la confirmation ne correspondent pas")
                                }*/
                                // Autre controller => Gerer le mod de passe
                                /*if (!bcrypt.compareSync(info.password, user.password ) ) {
                                    return res.send("Mauvais mot de passe");
                                }*/
                                // FRONT = METTRE laissez vide pour garder votre mdp actuel
                                /*if (!info.newpassword) {
                                    info.newpassword = info.password;
                                }*/
                                /*if (info.newpassword.length < 8) {
                                    errorsList.push("Le mot de passe doit contenir un minimum de 8 caracteres")
                                }*/
                                /*if (info.email !== user.email) {
                                    userStatus = 'a validé';
                                }*/
                    /*if (errorsList.length === 0) {
                                    const updateUser = {
                                        nickname: info.nickname,
                                        firstname: info.firstname,
                                        lastname: info.lastname,
                                        email: info.email,
                                        password: bcrypt.hashSync(info.password, 10),
                                        role: 'user',
                                        status: userStatus,
                                        avatar: info.avatar
                                    }*/
                                                // A RECUPERER POUR L'EMAIL
                                                /*if (userStatus === 'a validé') {
                                                    sendMail.mailer(updateUser.email)
                                                    console.log("email envoyé")
                                                }*/
                                                /*if (data.rowCount === 1) {
                                                    // return res.send("Vos modifications ont bien été enregistrées");
                                                    return res.send(updateUser);
                                                }*/
                                         /*} else {
                                    return res.send(errorsList);*/
                //});

module.exports = userController;