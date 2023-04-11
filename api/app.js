const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var path = require("path");
const cookieParser = require("cookie-parser");
// const {body, validationResult} = require("express-validator");

require("./db.js");
const verifyJwt=require('./middleware/Autenticacion');
const secure=require('./middleware/middlewareToken');
const app = express();


/* app.use(cors()); */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //ya usa bodyparser por adentro
app.use(express.static(path.join(__dirname, "public")));

//rutas
const routes = require("./routes/index.js");

app.name = "API";

// "http://localhost:3000" "https://arielzarate.github.io"

app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// verifyJwt.unless({path:['/']})
// app.use(verifyJwt);
//app.use('/', secure,routes);
app.use('/', routes);


   app.use(async (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    error.status = 403;
    error.status = 401;
    next(error);
    });

// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
