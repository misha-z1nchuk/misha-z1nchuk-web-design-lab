require('dotenv').config();
const express = require('express');
const  sequelize = require('./config/db');
const errorMidlleware = require('./src/api/middlewares/error-middleware');
const cors = require('cors');

sequelize.sync().then(() => console.log('db connected'));

const app = new express(); // eslint-disable-line new-cap

const PORT = process.env.PORT || 5000;

const Router = require('./src/api/routes/index');

app.use(cors());
app.use(express.json());
app.use('/api', Router);
app.use(errorMidlleware);

app.listen(PORT, () => {
    console.log('App listen port ' + PORT);
});




