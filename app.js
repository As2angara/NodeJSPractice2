const categories = require('./data/menu-categories');
const items = require('./data/menu-items');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/api/items', (req, res) => {
    res.send(items);
});

app.get('/api/categories', (req, res) => {
    res.send(categories);
});

app.listen(3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Listening on port ${port}...`);
})
