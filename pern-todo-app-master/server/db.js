const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Pesh@1234",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});
pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = pool;
