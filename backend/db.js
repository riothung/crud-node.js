const postgres = require("postgres");
const sql = postgres("postgresql://postgres.efginsoxufbscutujzls:jtsQ7DQoFpc8pdeX@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres", {
  host: "aws-0-ap-southeast-1.pooler.supabase.com", // Postgres ip address[s] or domain name[s]
  port: 6543, // Postgres server port[s]
  database: "postgres", // Name of database to connect to
  username: "postgres.efginsoxufbscutujzls", // Username of database user
  password: "jtsQ7DQoFpc8pdeX", // Password of database user
});

module.exports = sql;
