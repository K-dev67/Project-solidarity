/*const nodemailer = require('nodemailer');

const mail = {

    mailer: async () => {
        try {
            
            let testAccount = await nodemailer.createTestAccount();
            
            let transporter = nodemailer.createTransport({
                //host: "smtp.ethereal.email",
                //port: 587,
                //secure: false, 
                service: "",
                auth: {
                    user: '',
                    pass: ''
                },
                tls: {
                    rejectUnauthorized: false
                }
                
            });
            let info = await transporter.sendMail({
                from: '"Team Solidarité " <solidarite.no.reply@gmail.com>',
                to: "alvah51@ethereal.email",
                subject: "Activation de Compte",
                text: "Bienvenue sur notre, il ne reste plus qu'a activé ton compte pour profité pleinement du site.",
                html: "<a>http://localhost:8888/homePage</a>"
            });
            console.log("Message sent: %s ", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } catch (error) {
            console.trace(error);
            res.send(error);
        }
    },
};

module.exports = mail;*/