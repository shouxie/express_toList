/*
 * @Author: shouxie
 * @Date: 2020-06-24 12:03:39
 * @Description: 
 */ 
const express = require('express');

const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./public'));
routes(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('app is listening' + PORT);
  })
});