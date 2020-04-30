const dataMapper =require('../dataMapper');

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
    },/*
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
                    let userStatus = 'activé';
                    let errorsList = [];
                    const user = data.rowCount;
                    await dataMapper.checkEmail(info.email, (error, data) => {
                        if (error) {
                            console.trace(error);
                            res.send(error);
                        }
                        const mail = data.rows;
                        if ( mail.rowCount === 1 && mail.email !== info.email) {
                            errorsList.push("Cette email existe déja");
                        }
                        if (mail.rowCount === 0 || mail.email === info.email) {
                            dataMapper.checkName(info.pseudo, (error, data) => {
                                if (error) {
                                    console.trace(error);
                                    res.send(error);
                                }
                                const nickname = data.rows;
                                if (nickname.rowCount === 1 && nickname !== info.nickname) {
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
                                if (info.email !== user.email) {
                                    userStatus = 'a validé';
                                }
                                if (errorsList.length === 0) {
                                    const newUser = {
                                        nickname: info.pseudo,
                                        firstname: info.firstname,
                                        lastname: info.lastname,
                                        email: info.email,
                                        password: bcrypt.hashSync(info.password, 10),
                                        role: 'user',
                                        status: userStatus,
                                        avatar: info.avatar
                                    }
                                    // Rajout d'une condition userstatus MAIL
                                };

                            });
                        }
                    });
                });
            
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },*/
};

module.exports = userController;