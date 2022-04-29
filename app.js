var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");

var indexRouter = require("./app_server/routes/routes");
var usersRouter = require("./app_server/routes/users");
const config = require("./webpack.config");
const compiler = webpack(config);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server/views"));
app.set("view engine", "ejs");

// Other middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
