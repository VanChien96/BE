const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const route = require('./routes/index');
const cors = require("cors");


app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
  
//Connect db
// db.connect();
route(app);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

 // "scripts": {
  //   "start": "node src/index.js",
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },