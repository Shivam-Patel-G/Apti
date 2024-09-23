const mysql = require('mysql2/promise');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'aptitude',
  connectionLimit: 10
});



// Export the pool
module.exports = pool;
