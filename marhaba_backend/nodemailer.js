const nodemailer = require("nodemailer");
const jwt=require('jsonwebtoken')
const userm=require('./models/UserModel')
const locltorage=require('local-storage')
const env=require('dotenv')

  function main() {
    let eml=locltorage('email')
    let  tokenemail=jwt.sign({eml},process.env.TOKEN_SECRET)
    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
        user:"maslouhazeddine@gmail.com",
        pass:"mzxzsukrytpijqvn"

    },
  });

  let info ={
    from: '"soumia 👻" <maslouhazeddine@gmail.com>', // sender address
    to: locltorage('email'),
    subject: "Hello  verfication email✔", // Subject line
    text: "Hello world", // plain text body
    html: '<a class="btn btn-danger" href="http://127.0.0.1:4111/api/auth/Confirmemail/'+tokenemail+'">click pour verfier</a>',
  };
  transporter.sendMail(info)
//   console.log(' email verifier')
  
}

const ConfirmEmail= (req,res)=>{
    const token=req.params.token
    const tkn=jwt.verify(token,process.env.TOKEN_SECRET)
    userm.findOneAndUpdate({email: tkn.eml},{confirmEmail:true}).then((veremail)=>{
        if(veremail){
            res.redirect('http://localhost:3000/Login')
        }else{
            return res.status(401).send('note update')
        }
    })
    
}

module.exports={main,ConfirmEmail}
