require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/user');

require('./database/config');

const app = express();

app.use(morgan('tiny'));

app.use(cors({
  origin: [
    'https://mail-subscription-gy9gae1iz-juanmbriones.vercel.app',
    'https://mail-sender-back.herokuapp.com/',
  ],
}));

app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // parse application/json
app.use('/api', userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`'Express server port: ${process.env.PORT}`);
});

module.exports = app;
