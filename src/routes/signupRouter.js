const express = require("express");
const signuprouter=express.Router();

function signuprouters(nav){

    var signup=[
        {
            type:'input',
            label:'USERNAME:',
            input:'text',
            value:'username'
        },
        {
            type:'input',
            label:'EMAIL:',
            input:'email',
            value:'email'
        },
        {
            type:'input',
            label:'PASSWORD:',
            input:'password',
            value:'password'
    
        },
        {
            type:'input',
            label:'CONFIRM PASSWORD:',
            input:'password',
            value:'conpassword'
    
        },
        {
            type:'input',
            label:'DOB:',
            input:'date',
            value:'dob'
    
        },
        {
            type:'input',
            label:'PHONE',
            input:'text',
            value:'phone'
        },
        
        {
            type:'input',
            input:'submit',
            value:'LOGIN'
            
        }
    ];
    signuprouter.get('/',(req,res)=>{
        res.render('signup',{
            nav,
            title:'signup',
            signup  
        })
    });
    
    return signuprouter;

}

module.exports = signuprouters;