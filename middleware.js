const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const logger = require('morgan');
const multer = require('multer');
const port = 3005;

// handling with multer
const uploads = multer({dest:"./files/uploads"});

// Built in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// to serve a file to client
// app.use(express.static(path.join(__dirname,'files')));
// to serve a file in a virtual path
app.use("/static",express.static(path.join(__dirname,'files')));


// application level middleware
const middlewareLogger = (req, res, next) => {
  console.log(
    `middleware route is hitted Request details=>[${req.method}] url=> [${req.url}]`
  ); // we can see the console printing when a api is invoked
  console.log("End of middleware Route");
  next();
};
// to use this middleware function
app.use(middlewareLogger);

// Third party middleware
app.use(logger("combined"));
// Router level middleware
// to user the router
app.use("/api/users", router);
// authorization function

const userAuthorization = (req, res, next) => {
  console.log("I am in userAuthorization function");
  const authStatus = true;
  if (authStatus) {
    console.log("Valid user authStatus:", authStatus);
    next();
  } else {
    console.log("Invalid user");
    res.status(401);
    throw new Error("Invalid user");
  }
};
const getUsers = (req, res) => {
  console.log("I am in get route");
  res.json({ message: "Get all users" });
};
const createUsers = (req, res) => {
  console.log("This is the request body received from client : ", req.body);
  res.json({ message: "Create new user" });
};
router.use(userAuthorization);
// create the routers
router.route("/").get(getUsers).post(createUsers);

// Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  switch (statusCode) {
    case 401:
      res.json({ title: "UnAuthorized", message: err.message });
      break;
    case 404:
      res.json({ title: "Not Found", message: err.message });
      break;
    case 500:
      res.json({ title: "Server Error", message: err.message });
      break;
    default:
      break;
  }
};

// upload image using multer
app.post("/upload",uploads.single("uploadedImg"), (req, res, next)=>{
    console.log(req.file, req.body);
    res.send(req.file);
},(error, req, res, next)=>{
    res.status(400).send({err:error.message});
});

// error handling for route not defined

router.all("*", (req, res) =>{
    res.status(404);
    throw new Error("Route Not found")
});

app.use(errorHandler);
app.listen(port, () => {
  console.log(`middleware server listening to port ${port}`);
});
