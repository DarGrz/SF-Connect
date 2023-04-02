const express = require("express");
const dotenv = require("dotenv");
const jsforce = require("jsforce");
const cors = require("cors");
const conn = new jsforce.Connection();

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const username = process.env.USER;
const password = process.env.PASSWORD; // Password + Security Token

app.get("/", function (req, res) {
  res.json({ status: "online" });
});

app.get("/contacts/", function (req, res) {
  conn.query(
    "SELECT Id, Name, lastName, CreatedDate FROM Contact",
    function (err, result) {
      if (err) {
        res.json(err);
      }
      console.log("total : " + result.totalSize);
      res.json(result);
    }
  );
});

app.post("/create-contact/", function (req, res) {
  const { FirstName, LastName } = req.body;

  console.log("create");
  conn.sobject("Contact").create({ FirstName, LastName }, function (err, ret) {
    if (err || !ret.success) {
      return console.error(err, ret);
    } else {
      console.log("Created record id : " + ret.id);
    }
  });
});

app.get("/accounts/", function (req, res) {
  conn.query(
    "SELECT Id, Name, CreatedDate FROM Account",
    function (err, result) {
      if (err) {
        res.json(err);
      }
      console.log("total : " + result.totalSize);
      res.json(result);
    }
  );
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Server running at port: " + process.env.PORT);
});

function login() {
  if (username && password) {
    conn.login(username, password, function (err, res) {
      if (err) {
        return console.error(err);
      } else {
        loggedIn = true;
        console.log("Succcessfully logged into Salesforce.");
        console.log(res);
      }
    });
  } else {
    console.log("Username and password not setup.");
  }
}

login();
