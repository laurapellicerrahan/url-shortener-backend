require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();
app.use(cors());

connectDB();

app.use(express.json({extended: false}));

app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/api/url', require('./routes/url'));
app.use('/users', require('./routes/users'));

const PORT = 3008;

app.listen(PORT, () => console.log(`Port ${PORT}`));