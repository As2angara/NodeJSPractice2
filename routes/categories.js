const categories = require('../data/menu-categories');
const express = require('express');
const router = express.Router();


//CREATE
router.post('/create', (req, res) => {

    const category = {
        id: categories.length + 1,
        name: req.body.name
    }

    categories.push(category);

    res.send(categories);

});

//READ
router.get('/read', (req, res) => {
    res.send(categories);
});

//UPDATE
router.put('/update/:id', (req, res) => {

    const category = categories.find(c => c.id = parseInt(req.params.id));

    category.name = req.body.name;

    res.send(categories);

});

//DELETE
router.delete('/delete/:id', (req, res) => {

    const category = categories.find(c => c.id = parseInt(req.params.id));

    const index = categories.indexOf(category);

    categories.splice(index, 1);

    res.send(categories);

});


module.exports = router;

