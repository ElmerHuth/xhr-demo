const express = require('express');
const fs = require('fs');
const app = express();

// Säger åt nodejs att använda filerna från public-katalogen
app.use(express.static('public'));

// Start index åt användaren
app.get('/', (req,res) => {
    res.sendFile('index');
})

// Starta webbservern
app.listen(4242, () => {
    console.log('server is running on port 4242');
});