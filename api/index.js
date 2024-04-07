const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./product.json');
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, '../proyecto-react//build')));

app.get('/productos', (req, res) => {
    res.json(data); 
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
