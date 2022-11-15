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


const AddRole=async (req,res)=>{

    const InsertRole=  new rolesm({
        name:req.body.name
    })
   const SaveRole= await InsertRole.save();
   try {

    res.send(SaveRole)
} catch (error) {
    res.send("erroor de insert Role")

}
}

module.exports={
    AddRole
}