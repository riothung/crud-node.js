const sql = require("./db");
const express = require("express");
// const mysql = require("mysql");
const cors = require("cors");
const router = require("./routes/person");

// db.js

const app = express();

app.use(
  cors({
    credential: true,
    origin: "*",
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.get("/surat-masuk", (req, res) => {
  const sql = "SELECT * FROM surat";
  const data = db.query(sql, (err, result) => {
    const surat = JSON.parse(JSON.stringify(result));
    // console.log("Hasil ->", surat);

    res.json(surat);
  });
});

app.delete("/surat-masuk/delete/:id", (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM surat WHERE id = ${id}`;
  const data = db.query(sql, (err, result) => {
    const surat = JSON.parse(JSON.stringify(result));
    // console.log("Hasil ->", surat);

    res.json(surat);
  });
});

app.use(router);

app.listen(3000, () => {
  console.log("server is ready");
});

// app.update("/surat-keluar/update/:id", (req, res) => {
//   const sql = `UPDATE surat_keluar SET nomor_surat = ${nomor_surat}, tanggal_surat = ${tanggal_surat}, pengirim = ${pengirim}, penerima = ${penerima}, tujuan = ${tujuan}, file = ${file} WHERE id = ${id}`;
//   const data = db.query(sql, (err, result) => {
//     const suratUpdate = JSON.parse(JSON.stringify(result));
//   });
// });
