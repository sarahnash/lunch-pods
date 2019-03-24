const express = require('express')
const app = express()
const db = require('./models/db')
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')

// to do add sessions here?

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/client/public'))

app.get('/api/largegroup', function(req, res, nextFn){
  console.log(req.query)
  db.largegroup.findAll({
    where: {
      eventdate: req.query.eventdate
    },
    include: [{
      model: db.user,
      through: db.usersinlargegroup
    }]
  })
    .then(function(results) {
      const data = results.map(function (result) {
        return result.dataValues
      })
      res.send(data)
    })
    .catch(function (error) {
      console.log(error)
    })
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

const server = app.listen(port, () => {
  if(app.get('env') === 'test') return
  console.log('Express app started on port ' + port)
})

server.on('close', () => {
  console.log('closed express server')

  db.pool.end(() => {
    console.log('shut down connection pool')
  })
})
