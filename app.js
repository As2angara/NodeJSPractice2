const categories = require('./data/menu-categories');
const items = require('./data/menu-items');
const express = require('express');
const app = express();

app.use(express.json());

//CREATE
app.post('/api/add/item', (req, res) => {

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

app.post('/api/add/category', (req, res) => {

    const category = {
        id: categories.length + 1,
        name: req.body.name
    }

    categories.push(category);

    res.send(categories);

});

//READ
app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/api/items', (req, res) => {
    res.send(items);
});

app.get('/api/categories', (req, res) => {
    res.send(categories);
});

//UPDATE
app.put('/api/update/item/:id', (req, res) => {

    const item = items.find(i => i.id = parseInt(req.params.id));

    item.name = req.body.name;

    res.send(items);

});

app.put('/api/update/category/:id', (req, res) => {

    const category = categories.find(c => c.id = parseInt(req.params.id));

    category.name = req.body.name;

    res.send(categories);

});

//DELETE
app.delete('/api/delete/item/:id', (req, res) => {

    const item = items.find(i => i.id = parseInt(req.params.id));

    const index = items.indexOf(item);

    items.splice(index, 1);

    res.send(items);

});

app.delete('/api/delete/category/:id', (req, res) => {

    const category = categories.find(c => c.id = parseInt(req.params.id));

    const index = categories.indexOf(category);

    categories.splice(index, 1);

    res.send(categories);

});

//app listener
app.listen(3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Listening on port ${port}...`);
});
