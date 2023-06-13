const express = require("express");

const app = express();

const myJson = [
  {
    id: 1,
    name: "John",
    age: 31,
    city: "New York",
  },
  {
    id: 2,
    name: "Mary",
    age: 27,
    city: "San Francisco",
  },
  {
    id: 3,
    name: "Peter",
    age: 28,
    city: "California",
  },
];

// enable CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send(myJson);
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
