const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
var fs = require("fs");

const PORT = process.env.PORT || 8080;

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
    require("dotenv").config({ path: ".env.test" });
}   else if (process.env.NODE_ENV === "development") {
    require("dotenv").config({ path: ".env.development" });
}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', express.static(`${__dirname}/public`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});