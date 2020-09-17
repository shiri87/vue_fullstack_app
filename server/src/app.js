const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const router = require('./routes/routes')
const { sequelize } = require('./models')
const config = require('./config/config')


//start express//start server up
const app = express();

//middleware
app.use(bodyParser.json())
app.use(cors())
app.use(router)

sequelize.sync().then(() => {
    app.listen(config.port);
    console.log(`server is running ${config.port}`);
});