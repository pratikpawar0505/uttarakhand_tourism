const routes = require("./routes/route");
const express = require("express");
const app = express();
require("events").EventEmitter.prototype._maxListeners = 0;
//Get the post data from client
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

const port = 3002;
//Api routes
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
