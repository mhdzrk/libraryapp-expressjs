const express = require("express");
const loginrouter = express.Router();

function loginRouters(nav){
    var login=[
        {
            type:'input',
            label:'USERNAME:',
            input:'text',
            value:'username'
        },
        {
            type:'input',
            label:'PASSWORD:',
            input:'password',
            value:'password'
    
        },
        {
            type:'input',
            input:'submit',
            value:'LOGIN',
            login:'LOGIN'
            
        }
    ];
    loginrouter.get('/',(req,res)=>{
        res.render('login',{
            nav,
            title:'login',
            login
        })
    });
    return loginrouter;
    
}
module.exports=loginRouters;