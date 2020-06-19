express = require("express");
const newrouter = express.Router();

function newrouters(nav){
    var newbook=[
        {
            label:'Title',
            type:'input',
            input:'text',
            value:'book title'
        },
        {
            type:'input',
            label:'Author',
            input:'text',
            value:'authors name'
        },
        {
            type:'input',
            label:'Genre',
            input:'text',
            value:'genre of the book'
        },
        {
            type:'input',
            label:'Image',
            input:'file',
            value:'upload image here'
        },
        {
            type:'input',
            input:'submit',
            value:'SUBMIT',
            accept:'image/*'
            
            
        }
    ];

    newrouter.get('/',(req,res)=>{
        res.render('new',{
            nav,
            newbook,
            title:'add a new book'
        })
    })

    return newrouter;
}

module.exports=newrouters;