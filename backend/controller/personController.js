const sql = require("../db");

const createPerson = async (req, res) => {
  try {
    console.log(req.body);
    const { nomor_surat, tanggal_surat, pengirim, penerima, tujuan, file } = req.body;
    const sql = `INSERT INTO surat (nomor_surat, tanggal_surat, pengirim, penerima, tujuan, file) VALUES ('${nomor_surat}', '${tanggal_surat}', '${pengirim}', '${penerima}', '${tujuan}', '${file}')`;
    const data = db.query(sql, (err, result) => {
      const surat = JSON.parse(JSON.stringify(result));
      // console.log("Hasil ->", surat);

      res.json("success");
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
  // res.json(req.body);
};

const getPerson = async (req, res) => {
  const users = await sql`
    select
      *
    from person
  `;
  // users = Result [{ name: "Walter", age: 80 }, { name: 'Murray', age: 68 }, ...]
  return res.json(users);
};

module.exports = {
  getPerson,
  createPerson,
};
