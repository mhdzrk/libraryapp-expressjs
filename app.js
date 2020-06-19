const express = require("express");
var nav=[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login', name:'Login'},{link:'/signup',name:'Signup'},{link:'/new',name:'Add a new book'}];
const app = new express();
const booksrouter= require ('./src/routes/booksRoutes')(nav);
const authorsrouter = require('./src/routes/authorsRoutes')(nav);
const loginrouter= require('./src/routes/loginRouter')(nav);
const signuprouter = require('./src/routes/signupRouter')(nav);
const newrouter = require('./src/routes/newRoutes')(nav);

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static("./public"));
app.use('/books',booksrouter);
app.use('/authors',authorsrouter); 
app.use('/login',loginrouter);
app.use('/signup',signuprouter);
app.use('/new',newrouter);



app.get('/',(req,res)=>{
    res.render("index",{
        title:'Library',
        nav

    });
});


app.listen(3000);


