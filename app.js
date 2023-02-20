const express = require('express');

// express app
const app = express();

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
res.send();
})
