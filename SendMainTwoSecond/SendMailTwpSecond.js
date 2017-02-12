var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var app = express();
app.use('/sayHello', router);

//router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello


    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'abcd@gmail.com', // Your email id
            pass: 'acscsdsxxx' // Your password
        }
    });
    
//var text = 'Hello world from \n\n' + req.body.name;

var mailOptions = {
	
    from: 'abcd@gmail.com>', // sender address
    to: 'xyz@yahoo.com', // list of receivers
    subject: 'Email test', // Subject line
    text: 'text' //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        res.json({yo: info.response});
    };
});