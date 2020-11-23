const express = require("express");
app = express();
app.listen(3500, () => console.log("RS listening at 127.0.0.1:3500"));
app.use(express.static("rs"));
app.use(express.json({ limit: "1mb" }));

cycle = 0
app.post("/db_c", (req, res) => {
  console.log(req.body);
  cycle = cycle + 1;
  time = Date.now();
  res.json({
    name: "RS1",
    status: "success"
  });
});

app.post("/db_t", (req, res) => {
  console.log(req.body);
  cycle = cycle + 1;
  time = Date.now();
  res.json({
    name: "RS1",
    status: "success"
  });
});

let d1 = "2020-06-30_12:33:45"; //time
let d2 = 0; //cycle counter
let d3 = 0; // active PS
let d4 = 0; // hash in this cycle
let d5 = 0; // hash in data base
let d6 = 0;
let d7 = 0;
let d8 = "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890";
var data = { d1, d2, d3, d4, d5, d6, d7, d8 };

const crypto = require("crypto");

app.get("/dashboard", (req, res) => {
  rxjson = req.body;
  console.log(rxjson);
  console.log(data);
  res.json(data);
  });

async function intervalFunc() {
  data.d1 = Date.now()
  data.d2++;
  data.d4 = data.d4 +7;
  if (data.d4 > 20) data.d4 = data.d4-20;
  data.d5 = data.d5 + data.d4;
  data.d7 = data.d7 + 3;
  hash_data = "" + data.d5
  data.d8 = crypto
  .createHash("sha256")
  .update(hash_data)
  .digest("hex");
  }
   
setInterval(intervalFunc, 1000); 