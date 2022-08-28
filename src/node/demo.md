# app.js
```javascript
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/", function(req, res) {
  const data = req.body;
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