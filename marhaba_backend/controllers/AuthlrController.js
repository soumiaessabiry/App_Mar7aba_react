const db=require('../Config/db')
const usersm=require('../models/UserModel')
const rolesm=require('../models/RoleModel')
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const locltorage=require('local-storage')
const jwt=require('jsonwebtoken')
const env=require('dotenv')
const nodemail=require('../nodemailer')
const Role_Client=process.env.Role_Client
const Role_Manager=process.env.Role_Manager
const Role_Livreur=process.env.Role_Livreur

//**register**/
const Register=async (req,res)=>{
    // const {body} = req
    const checkemail= await usersm.findOne({email:req.body.email})
    if(checkemail){
        return res.send({message:"email is already registered"})
    }
    locltorage('email',req.body.email)
    nodemail.main()
    // const salt=await bcrypt.genSalt(10)
    const Rpwd=req.body.password
    const hachpassword=await bcrypt.hash(Rpwd,10)

    // insrtrt user
    const InsertUser=new usersm({
        // ...body,
        username:req.body.username,
        email:req.body.email,
        password:hachpassword,
        role:Role_Client,
        confirmEmail:false
    })
    // save user
    const saveuser=await InsertUser.save()

    try {
        locltorage("email",saveuser.email)
        res.send(saveuser)
    } catch (error) {
        res.send("erroor de insert user")

    }
    
}

//**login**/
const Login=async (req,res)=>{
    const pwdlogin=req.body.password.toString();
    const emaillogin=req.body.email;
    const checkuser= await usersm.findOne({
        email:emaillogin
    })
    if(checkuser){
        if(checkuser.confirmEmail==true){

            const compartpwt=await bcrypt.compare(pwdlogin,checkuser.password)
            if(!compartpwt){
                res.send({messagepwd:'Password inccorect'})
            }else{
             
                const tokene=jwt.sign({checkuser},process.env.TOKEN_SECRET)
                locltorage('tokene',tokene)
                const username=checkuser.username;
                const email=checkuser.email;
                const password=checkuser.password         
                rolesm.findOne({_id: checkuser.role})
                    .then(e=>{
                        const datalog ={username: username ,email: email, role: e.name, password:password}
                        res.json({messagesuccess: datalog})
                    
                    })
                    .catch(()=>{res.json({message: 'error'})})
    
            }
        }else{
            res.json({veremail:"Verifier your Email"})
        }
        
        // if(checkuser.role="Manager")
    }else{
        res.send({messusernotexist:"User not exist"})
    }

}
//*******logout */
const Logout=(req,res)=>{
    const clearlocal=locltorage.clear();
    if(clearlocal){
        return res.send({logoutmessage:"Quiter l'application"})
    }

}
//****resit passwrd*/
const RsitePassword= async(req,res)=>{
    let emaillog=req.body.email;
    let passwordlog=req.body.password.toString();
    let newpasswordlog=req.body.newpassword.toString()
    let newpwdhach=await bcrypt.hash(newpasswordlog,10)
    const checUser= await usersm.findOne({
        email:emaillog,
    })
    if(checUser){
        const comppwd=await bcrypt.compare(passwordlog,checUser.password)
        if(comppwd){
            const updpwd=await usersm.updateOne({email:emaillog},{$set:{password:newpwdhach}})
            if(updpwd){
             res.send({messageUpdatepwd:"updat password is success"})

            }

        }else{
            res.send({passwordIncorect:"last password inccorect"})

        }
    }else{
        res.send({emailusernotexist:"Email not exist"})
    }
}

//******Ajouter livreur */
const AddLivreur=async (req,res)=>{
   const checkLivreur=await usersm.findOne({email:req.body.email})
   if(checkLivreur){
    return res.send({message:"email is already registered"})
   }else{
    const pwdlivreur=req.body.password.toString()
    const salt= await bcrypt.genSalt(10)
    const hachPassword= await bcrypt.hash(pwdlivreur,salt)
    const InserLivreur= new usersm({
        username:req.body.username,
        email:req.body.email,
        password:hachPassword,
        role:Role_Livreur,
        confirmEmail:false


    })
    const  saveLivreur= await InserLivreur.save();
    try {
        res.send(saveLivreur)
    } catch (error) {
        res.send("livreur not add !!!!!!!!!!!!")
    }


   }

}



module.exports={
    Register,
    Login,
    RsitePassword,
    Logout,
    AddLivreur,
 

}