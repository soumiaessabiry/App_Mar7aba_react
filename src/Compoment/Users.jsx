import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {FcLock ,FcFeedback,FcHighPriority} from "react-icons/fc";
import{Router ,NavLink} from 'react-router-dom'
import axios from 'axios'
import home from './Home'
const btnlg={background:'coral', border:'none'}
const LOGOUT={background:'coral', color:'black', border:'none'}
const sing={color:'coral'}
const card = {boxShadow: '1px 2px 20px #F4AAB9',color:"black",text:"bolder", };
const Username=localStorage.getItem('NameUser')
const Email=localStorage.getItem('EmailUser')
const Role=localStorage.getItem('RoleUser')
const logout=()=>{
    localStorage.clear();

}
const User=()=>{
    return(
    <Container> 
        <div className="card  formregister" style={card}>
            <div className="card-body">
                <h5 className="card-title">Hello {Username}</h5>
                <h5 className="card-title">Your email is : {Email}</h5>
                <h5 className="card-title">Your role is : {Role}</h5>
                <p className="card-text"></p>
                <div class="d-grid gap-2">
                <button type='submit' className="btn btn-lg fw-bolder" style={LOGOUT} onClick={logout}><NavLink to='/home' className='LOGOUT'>LOGOUT</NavLink></button>
                </div>           
             </div>
        
            </div>
    </Container>
    );
};

export default User
