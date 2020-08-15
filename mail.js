// tutaj są wszystkie potrzebne dane aby wysłać naszego email'a
// 3
const nodemailer = require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')

const auth = {
    auth: {
        api_key: '2ece005220955a704423d945aa187cf9-07e45e2a-8d699583',
        domain: 'sandbox6a1a0e1e5afb4ebc81974954b797d514.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth))

// 4 trochę destruktyryzacji
const sendMail=(email, subject,text, cb)=>{
    const mailOptions = {
        from: email,
        to: 'maciejkruszyniak@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
           cb(err,null)
        }
        else {
           cb(null, data)
        }
    });
}

module.exports=sendMail;

// 


