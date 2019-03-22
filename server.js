var express = require('express')
var app = express()

// app.use(express.static(_dirname + '/src'))

app.get('/largegroup', function(req, res, nextFn){
  console.log('the app sent me an HTTP request to route GET /largegroup');
  res.send('this will be who is in the groups!')
})

app.post('/rsvpyes', function(req, res, nextFn){
  console.log('the app sent an HTTP request to POST /rsvp');
  res.send('this means the user responded YES to invite')
})

app.delete('/rsvpno', function(req, res, nextFn){
  console.log('the app sent an HTTP request to POST /rsvp');
  res.send('this means the user responded NO to invite')
})

app.post('/creategroups', function(req, res, nextFn){
  console.log('the app sent an HTTP request to POST /creategroups');
  res.send('this means the admin sorted the users')
})

app.get('/smallgroups', function(req, res, nextFn){
  console.log('the app asked me for the small groups at GET /smallgroups');
  res.send('here are the small groups!')
})

app.listen(8000, function(){
  console.log('the server is listening!')
})
