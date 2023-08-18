import mysql2 from "mysql2";

const HOST = "gcp.connect.psdb.cloud";
const USERNAME = ""; // removed
const PASSWORD = ""; // removed

const config = {
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
};
const connection = mysql2.createConnection(config);

connection.connect((err) => {
  if (err) throw err;

  console.log("Connected to PlanetScale");

  // request data from database
});

connection.end();
