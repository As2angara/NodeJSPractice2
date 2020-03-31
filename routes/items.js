const items = require('../data/menu-items');
const express = require('express');
const router = express.Router();

//CREATE
router.post('/create', (req, res) => {

    const item = {
        id: items.length + 1,
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        catid: req.body.catid
    }

    items.push(item);

    res.send(items);

});



//READ
router.get('/read', (req, res) => {
    res.send(items);
});



//UPDATE
router.put('/update/:id', (req, res) => {

    const item = items.find(i => i.id = parseInt(req.params.id));

    item.name = req.body.name;

    res.send(items);

});

//DELETE
router.delete('/delete/:id', (req, res) => {

    const item = items.find(i => i.id = parseInt(req.params.id));

    const index = items.indexOf(item);

    items.splice(index, 1);

    res.send(items);

});


module.exports = router;
