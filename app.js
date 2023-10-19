const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var cors=require('cors')

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();
app.use(cors());

const User = require('./models/User');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes= require('./routes/user');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/Expense',userRoutes)


app.use(errorController.get404);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
