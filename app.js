var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var app = express();
var music_path = process.env.MUSIC_PATH;
var video_path = process.env.VIDEO_PATH;
var image_path = process.env.IMAGE_PATH;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(image_path));
app.use('/audio', express.static(music_path));
app.use('/mov', express.static(video_path));

// app.use('/', require('./routes/def.routes'));
require('./routes/app.routes')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const port = process.env.PORT;
app.listen(port, function(err){
  if (err) {
    console.log(err);
  }
  console.log('server is running on port : '+port);
});