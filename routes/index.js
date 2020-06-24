/*
 * @Author: shouxie
 * @Date: 2020-06-24 15:45:37
 * @Description: 
 */ 
const db = require('../models');
module.exports = function(app){
  app.get('/tolist', (req, res) => {
    db.tolist.findAll({}).then(data => {
      res.json({
        data,
        status: 0,
        message: 'success'
      });
    })
  });
  app.post('/tolist', (req, res) => {
    console.log('req.body', req.body);
    let {text, complete} = req.body;
    db.tolist.create({
      text,
      complete
    }).then(data => {
      res.json(data);
    });
  });
  app.delete('/tolist/:id', (req, res) => {
    db.tolist.destroy({
      where: {id: req.params.id}
    }).then(data => {
      res.json(data);
    })
  });
  app.put('/tolist', (req,res) => {
    console.log('req.body', req.body);
    let {id,text,complete} = req.body;
    db.tolist.update({
      text,
      complete
    },{
      where: {id}
    }).then(data => {
      console.log(data, 'data')
      res.json(data);
    })
  });
}