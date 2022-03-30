const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const user = require('./module')
const user1 = require('./Forum_module')

const hostname = 'localhost';
const port = 5000;

app.use(cors());

//Database Connections
mongoose.connect(
'mongodb+srv://anuj_sharma:Admin123@cluster0.iufli.mongodb.net/signUp?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true});


// parse application/json
app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));


app.post('/SignUp', function (req, res) {
  var userid = req.body.userid;
  var userpassword = req.body.userpassword;
  console.log(userid,userpassword)
  var User1 = new user(
    {userid: userid, 
    userpassword: userpassword});

// save model to database
User1.save(function (err, data) {
  if (err) {
    res.send({status:0, result:err})
  }
  else {
    res.send({status:1, result:data})
  }
});
})

app.post('/login', function (req, res) {
  var userid = req.body.userid;
  var userpassword = req.body.userpassword;
  user.findOne({ userid: userid, userpassword: userpassword}, function(err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
  })

  // Forum Database Connection
  app.post('/Forum', function (req, res) {
    var userid = req.body.userid;
    var usercomment = req.body.usercomment;
  
    console.log(userid,usercomment,"forum")
    
    var User1 = new user1(
      {userid: userid, 
      usercomment: usercomment
      });
  
  // save model to database
  User1.save(function (err, data) {''
    if (err) {
      res.send({status:0, result:err})
    }
    else {
      res.send({status:1, result:data})
    }
  });
  })
  
  app.get('/getdata', function (req, res) {
    user1.find({}, function(err, data){
      res.send({status:200,result:data})
      console.log(">>>> " + data );
  });
  })
  
  
// a document instance

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});