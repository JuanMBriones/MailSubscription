require('./config/config')
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')
var cors = require('cors')

const app = express();      
app.use(morgan('tiny'))

app.use(cors({
    origin: '*',
}))

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

require('./database/config'); // IMPORT MONGODB                             

var userRoutes = require('./routes/user');

app.use('/api', userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`'Express server port: ${process.env.PORT}`);
});

module.exports = app;          