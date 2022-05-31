# app.js
```javascript
const request = require("request");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();


app.use(express.static(__dirname + "/public"));
app.use(express.static("../../16181"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/", function(req, res) {
  const info = req.body;
  const data= handle(info)
  res.send(JSON.stringify(data))
});

app.listen(3001, function() {
  console.log("3001 is running");
});

```
# package.json
```json
{
  "name": "main",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1"
  }
}
```