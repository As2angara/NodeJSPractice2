const express = require('express');
const app = express();
const category = require('./routes/categories');
const item = require('./routes/items');
const home = require('./routes/index');

app.use(express.json());
app.use('/api/category', category);
app.use('/api/item', item);
app.use('/', home);


//app listener
app.listen(3000, () => {
    const port = process.env.PORT || 3000;
    console.log(`Listening on port ${port}...`);
});
