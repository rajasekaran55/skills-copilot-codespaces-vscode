// Create web server
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const commentsFile = path.join(__dirname, "comments.json");
const comments = JSON.parse(fs.readFileSync(commentsFile).toString());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(