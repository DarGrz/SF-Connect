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
    "SELECT Id, Name, CreatedDate FROM Contact",
    function (err, result) {
      if (err) {
        res.json(err);
      }
      console.log("total : " + result.totalSize);
      res.json(result);
    }
  );
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

app.listen(3000, (req, res) => {
  console.log("Server running at port 3000");
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
