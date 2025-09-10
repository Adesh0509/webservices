import { getAllusers, createUser } from './usermodel.js'

export const getUsers = async (req, res) => {
  try {
    const users = await getAllusers()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const addUser = async (req, res) => {
  try {
    const user = req.body
    const result = await createUser(user)
    res.json({ message: 'User added successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
