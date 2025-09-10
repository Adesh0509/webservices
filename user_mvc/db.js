import mysql from 'mysql2/promise'

const conn = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'adeshpass',
  database: 'node'
})

conn.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("DB connected")
  }
})

export default conn
