const express = require("express");
app = express();
app.listen(3500, () => console.log("RS listening at 127.0.0.1:3500"));
app.use(express.static("rs"));
app.use(express.json({ limit: "1mb" }));

app.get("/dashboard", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS1",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 12,
      ts_Count: 256,
      qs_Count: 22,
      query_in: 228,
      query_total: 2234,
      hash_in: 223445,
      hash_total: 223456777777,
      db_c_Hash: "2abcdef23123123123456789abc",
      db_t_hash: "213ab331243439898779879877",
    });
  });

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