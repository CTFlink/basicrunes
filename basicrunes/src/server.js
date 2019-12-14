const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data.js')
const path = require('path');

//Dette bruges til at sætte en static folder så middleware løsninger fungerer
app.use(express.static(path.join(__dirname, 'public')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

//denne route henter Runerne 
app.get('/runes', (req, res) => {
    res.json(data.runeValues);
});