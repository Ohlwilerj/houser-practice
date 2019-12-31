require("dotenv").config();
const express = require("express");
const app = express();
const ctrl = require("./controller");
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

// TOP LEVEL MIDDLEWARE
app.use(express.json());

// ENDPOINTS
app.post("/api/house", ctrl.addHouse);
app.get("/api/house", ctrl.getHouses);
app.delete("/api/delete", ctrl.deleteHouse);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected");
});

app.listen(SERVER_PORT, () =>
  console.log(`Server is working on ${SERVER_PORT}`)
);
