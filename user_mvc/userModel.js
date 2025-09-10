import conn from './db.js'

export const getAllusers = async () => {
  const [rows] = await conn.query("select * from users")
  return rows
}

export const createUser = async (user) => {
  const { id, name, phone, city } = user
  const [result] = await conn.query("insert into users values(?,?,?,?)",[id, name, phone, city])
  return result
}
