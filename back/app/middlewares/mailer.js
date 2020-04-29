const nodemailer = require('nodemailer');

const mail = {

    mailer: async (req, res) => {
        try {
            let testAccount = await nodemailer.createTestAccount();
            
            let transporter = nodemailer.createTransport( {
                //host: "smtp-email.outlook.com",
                //port: 587,
                //secure: false, 
                service: "Gmail",
                auth: {
                    user: process.env.MAIL,
                    pass: process.env.MAILPASS
                },
                tls: {
                    rejectUnauthorized: false,
                    //ciphers: 'SSLv3'
                }
                
            });
            let info = await transporter.sendMail({
                from: '"Team Solidarité " <solidarite.no.reply@gmail.com>',
                to: `${req}`,
                subject: "Activation de Compte",
                text: "Bienvenue sur notre, il ne reste plus qu'a activé ton compte pour profité pleinement du site.",
                html: `<p>Cliquez <a href="http://localhost:8888/activation/user/${req}">ici</a> pour activé votre compte.</p>`
            });
            console.log("Message sent: %s ", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },
};

module.exports = mail;