const supabase = require("../supabase");
const multer = require("multer");
const { decode } = require("base64-arraybuffer");
const { v4: uuid } = require("uuid");
const prisma = require("../db");

// const sql = require("../db");

const createPerson = async (req, res) => {
  try {
    const id = uuid();
    const { name, age } = req.body;
    const file = req.file;
    const fileBase64 = decode(file.buffer.toString("base64"));
    const { data, error } = await supabase.storage.from("image").upload(id, fileBase64);
    // console.log(data, error);
    // console.log(req.body);
    console.log(file);
    const users = await sql`
      INSERT INTO person (name, age, image) VALUES (${name}, ${parseInt(age)}, ${id})
      returning *
    `;
    return res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
  // res.json(req.body);
};

const getData = async (req, res) => {
  // const users = await sql`
  //   SELECT
  //     *
  //   FROM person
  // `;
  // const map = users.map((user) => {
  //   const { data } = supabase.storage.from("image").getPublicUrl(user.image);
  //   return { ...user, image: data.publicUrl };
  // });

  const users = await prisma.person.findMany();
  const map = users.map((user) => {
    const { data } = supabase.storage.from("image").getPublicUrl(user.image);
    return { ...user, id: parseInt(user.id), age: parseInt(user.age), image: data.publicUrl };
  });
  return res.json(map);
};

module.exports = {
  createPerson,
  getData,
};
