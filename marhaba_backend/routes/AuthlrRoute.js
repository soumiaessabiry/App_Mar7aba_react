const express=require('express');
const {Register,Login,RsitePassword,AddLivreur,Logout}=require('../controllers/AuthlrController');
const {AddRole}=require('../controllers/RoleConttroller')
const router=express.Router();
const veriftoken=require('../verifitoken')
const nodemail=require('../nodemailer')

const Role_Client=process.env.Role_Client
const Role_Manger=process.env.Role_Client
const Role_Livreur=process.env.Role_Client


router.post('/register',Register);
router.post('/login',Login);
router.post('/resitpassword',RsitePassword);
router.post('/AjouterRole',AddRole)
router.post('/Addlivreur',AddLivreur)
router.get('/Confirmemail/:token',nodemail.ConfirmEmail)
router.get('/Logout',Logout)

// midlllllllwair
router.get('/client',veriftoken.verifiertoken([Role_Client]),(req,res)=>{
    res.send("hello Client")
});
router.get('/livreure',veriftoken.verifiertoken([Role_Livreur]),(req,res)=>{
    res.send("hello livreure")
})
router.get('/Dashbord',veriftoken.verifiertoken([Role_Manger]),(req,res)=>{
    res.send("hello manager ")
})
router.get('/*',(req,res)=>{
    res.send("erooore de access a cette page")
})
router.post('/*',(req,res)=>{
    res.send("erooore de access a cette page")
})

// router.get('/Confirmemail/:token',nodemail.ConfirmEmail)


module.exports = router;















// router.get('/Client',veriftoken.verifiertoken(["client"]),(req,res)=>{
//     res.send("hello clien")
// })
// router.get('/admin',veriftoken.verifiertoken(["admin"]),(req,res)=>{
//     res.send("hello admin")
// })
// router.get('/livreure',veriftoken.verifiertoken(["livreure"]),(req,res)=>{
//     res.send("hello livreure")
// })