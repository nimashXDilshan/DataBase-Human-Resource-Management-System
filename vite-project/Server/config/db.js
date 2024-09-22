import mysql from 'mysql';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Ra#A1381',
  database: 'jupitersimple'
});

export default db;
