const express = require("express");
app = express();
app.listen(3100, () => console.log("RS simulator listening at 127.0.0.1:3100"));
app.use(express.static("rs"));
app.use(express.json({ limit: "1mb" }));
let cycle = 1000;



app.get("/rs1", (req, res) => {
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
  
app.get("/rs2", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS2",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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

  app.get("/rs3", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS3",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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

  app.get("/rs4", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS4",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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

  app.get("/rs5", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS5",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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

  app.get("/rs6", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS6",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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

  app.get("/rs7", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS7",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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

  app.get("/rs8", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS8",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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

  app.get("/rs9", (req, res) => {
    console.log(req.body);
    cycle = cycle + 1;
    time = Date.now();
    res.json({
      name: "RS9",
      status: "success",
      real_time: time,
      tick: cycle,
      ps_Count: 22,
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
              