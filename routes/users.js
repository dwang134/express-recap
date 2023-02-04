const express = require('express');
const router = express.Router();

//make it specific to this route /users
router.use(logger);

router.get('/', (req, res)=> {
    console.log(req.query.name);
    res.send('User List');
})

router.get('/new', (req, res)=> {
    res.render('users/new', {firstName: "Test"});
})

router.post('/', (req, res)=> {

    const isValid = true;
    if (isValid){
        users.push({firstName: req.body.firstName})
        //redirect to brand new user that has just been created
        res.redirect(`/users/${users.length - 1}`)
    }else{
        console.log('Error');
        res.render('users/new', {firstName: req.body.firstName})
    }
    //express does not allow you to access req.body be default
    // res.send(`${req.body.firstName} has been created`);
})

router.route('/:id').get((req, res)=> {
    console.log(req.user);
    res.send(`Getting user: ${req.params.id}`);
})
.put((req, res)=> {
    res.send(`Update user with this ID: ${req.params.id}`);
})
.delete((req, res)=> {
    res.send(`Deleting user with ID: ${req.params.id}`);
})

// router.get('/:id', (req, res)=> {
//     res.send(`Getting user: ${req.params.id}`);
// })

// router.put('/:id', (req, res)=> {
//     res.send(`Update user with this ID: ${req.params.id}`);
// })

// router.delete('/:id', (req, res)=> {
//     res.send(`Deleting user with ID: ${req.params.id}`);
// })

const users = [{name: 'Kyle'}, {name: 'Sally'}]

//param is a type of middleware
router.param('id', (req, res, next, id)=> {
    //assigns req.user to the object[indicie]
    req.user = users[id];
    //doesnt return response since it's a middleware
    console.log(id);
    //returns the next expected response
    next();
}) 

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

module.exports = router;