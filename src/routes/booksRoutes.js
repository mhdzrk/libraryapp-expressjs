const express = require('express');
const booksrouter=express.Router();

function router(nav){
var books = [
    {
        title:'Tom and Jerry',
        author:'Joseph barbera',
        genre:'Cartoon',
        img:'taj.jpeg'

    },
    {
        title:'Harry Potter',
        author:'J K Rowling',
        genre:'Fantasy',
        img:'hp.jpeg'

    },
    {
        title:'Paathumayude Aadu',
        author:'Vaikom Muhammed Basheer',
        genre:'Drama',
        img:'pa.jpeg'

    }
]
 




booksrouter.get('/',(req,res)=>{
    res.render("books",{
        title:'Books',
        nav,
        books

    });
});

booksrouter.get('/:i',(req,res)=>{
    const id=req.params.i
    res.render("book1",{
    nav,
    title:books[id].title,
    book:books[id]

    })
});
return booksrouter;
}

module.exports = router;