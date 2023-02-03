const express = require('express');

const app = express();

app.set('view engine', 'ejs');
// app.use(logger);

app.get('/', logger, (req, res)=> {
    res.render('index', {text: 'World'});
})

/*
app.get('/', (req, res)=> {

    //status
    res.status(500);
    // //response to send back
    res.send('Hi');
    // //sending back status and response
    res.sendStatus(500).send("Hi");
    // //sending back json
    res.status(500).json({message: 'Error'});
    // //send down file to download 
    res.download('server.js');
    //rendering a file(HTML most of the time)
    //need a view engine for it to work (EJS or pubs)
    res.render('index', {text123: 'World'});
})

*/

const userRouter= require('./routes/users')

app.use('/users', userRouter);

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000);

