const express = require("express");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "election_db",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection.query(`DELETE * FROM candidates WHERE id = ?`, 1, function (
  err,
  result
) {
  if (err) {
    console.log(err);
  }
  console.log(result, this, this.changes);
});

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
