const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const server = http.Server(app);
// var favicon = require('serve-favicon');
// var logger = require('morgan');
const uuidv1 = require('uuid/v1');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var employee = require('./server/routes/api/employee');
var dailystatus = require('./server/routes/api/dailystatus');
// mongoose.connect('mongodb://localhost/Dailystatusdb', {promiseLibrary: require('bluebird') })
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

mongoose.connect("mongodb://ruchi2491:Ruchi@123@ds145951.mlab.com:45951/dailystatusdb", { useNewUrlParser: true },function (error) {
  try {
    if (error) {
      console.error('error' + error)
    }else {
      console.log('mongodb connection succesfull!!')
    }
  } catch (error) {
    console.error('error' + error)
  }
})

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//app.use(express.static(path.join(__dirname, '/src')));
app.use(express.static(path.join(__dirname, 'dist')));
//app.use('/node_modules', express.static(__dirname + '/node_modules'));
//app.use('/app', express.static(__dirname + '/app'));

//app.use('/employee', express.static(path.join(__dirname, 'dist')));
//app.use('/dailystatus', express.static(path.join(__dirname, 'dist')));

app.get('/api/employee', employee.getEmployeeList);
app.get('/api/employee/:id',employee.getEmployeeDetails);
app.post('/api/employee',employee.setEmployee);
app.put('/api/employee/:id',employee.setEmployeeDetails);
app.delete('/api/employee/:id',employee.deleteEmployee);

app.get('/api/dailystatus', dailystatus.getDailystatus);
app.get('/api/dailystatus/:id',dailystatus.getDailystatusId);
app.get('/api/dailystatus/:id/:date',dailystatus.getDailystatusIdDate);
app.post('/api/dailystatus',dailystatus.setDailystatus);
app.put('/api/dailystatus/:id',dailystatus.setDailystatus);
//app.delete('/api/dailystatus/:id',dailystatus.deleteDailystatus);

app.get('/', function(req, res) {
  console.log("directory name is"+__dirname);
 // res.send(__dirname + '/login.html');
 // res.render('/login');
 res.redirect('/login');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
 res.render('error');
 //next(err)
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3001';
app.set('port', port);
server.listen(port, () => console.log(`Running on localhost:${port}`));