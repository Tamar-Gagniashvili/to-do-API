const express = require('express');
const router = express.Router();
const Todos = require('../models/todo');

//  GET
//  /api/todo
router.get('/', function (req, res) {
  Todos.findAll({
    where: {
      userID: req.query.userID,
    },
  })
    .then(result => {
      res.setHeader('Content-Type', 'application/json');
      res.send({ data: result });
    })
    .catch(error => {
      console.log(error);
      res.send(400, { status: '400', message: 'error' });
    });
});


// POST
// /api/todo

router.post('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let notValid = '';

  if (notValid) {
    res.send(400, {
      status: '400 Bad Request ',
      message: 'Request data is not valid!',
    })
  } else {
    Todos.create({
      value: req.body.value,
      userId: req.body.userId,
    }).catch(error => {
      console.log('Error', error);
      res.send(400, {
        status: '400 Bad Request ',
        message: 'Request data is not valid!',
      });
    });

    res.send(200, { status: 200, message: 'data created!' });

  };
});



// DELETE
// /api/todo
router.delete('/', function (req, res) {
    Todos.destroy({
      where: {
        createdAt: req.query.createdAt,
      },
    }).catch(error => {
      console.log('Error', error);
      res.send(400, {
        status: '400 Bad Request ',
        message: 'Request data is not valid!',
      });
    });
    res.send(200, { status: 200, message: 'data deleted!' });
});





// რაღცა რექვექსთით რედაქტირება ანუ checked/unchecked - finished


router.post('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

    Todos.reload({
      finished: !req.body.finished,
      userId: req.body.userId,
    }).catch(error => {
      console.log('Error', error);
      res.send(400, {
        status: '400 Bad Request ',
        message: 'Request data is not valid!',
      });
    });

    res.send(200, { status: 200, message: 'data changed!' });

});





















module.exports = router;