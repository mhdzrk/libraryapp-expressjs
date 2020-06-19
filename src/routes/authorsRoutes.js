const express = require('express');
const authorsrouter=express.Router();

function routers(nav){
var authors= [
    {
        name:'Joseph Barbera',
        work:'Tom and Jerry',
        genre:'Cartoon',
        img:'jb.jpeg'
    },
    {
        name:'J K Rowling',
        work:'Harry Potter',
        genre:'Fantasy',
        img:'jkr.jpeg'
    },
    {
        name:'Vaikom Muhammed Basheer',
        work:'Paathummayude Aadu',
        genre:'Drama',
        img:'vmb.jpeg'
    }
]



authorsrouter.get('/',(req,res)=>{
    res.render('authors',{
        nav,
        title:'Authors',
        authors

    }) 

})

authorsrouter.get('/:i',(req,res)=>{
    const id =req.params.i;
    res.render('author1',{
        nav,
        author:authors[id]

    })
})
    return authorsrouter;
}
module.exports=routers;