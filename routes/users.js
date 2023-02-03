const express = require('express');
const router = express.Router();


router.get('/', (req, res)=> {
    res.send('User List');
})

router.get('/new', (req, res)=> {
    res.send('User new form');
})

router.post('/', (req, res)=> {
    res.send('User has been created');
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

module.exports = router;