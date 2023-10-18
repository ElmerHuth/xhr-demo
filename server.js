const express = require('express');
const app = express();

app.use(express.static('public'));

// Start index åt användaren
app.get('/', (req,res) => {
    res.sendFile('index');
})

app.listen(4242, () => {
    console.log('server is running on port 4242');
});