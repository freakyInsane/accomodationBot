const express = require('express');
const app = express();
const osmosis = require('osmosis');

app.get('/', (req, res) => {
    osmosis
        .get('www.google.com')
        .set({'Title': 'title'})   // альтернатива: `.find('title').set('Title')`
        .data(console.log); // выведет {'Title': 'Google'}
    res.send('Hello World!');
});
app.listen(7777, () => {
    console.log('Example app listening on port 7777!');
});

