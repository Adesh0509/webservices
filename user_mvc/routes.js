import express from 'express'
import { getUsers } from './userController.js'

const router = express.Router()

router.get("/users", getUsers)

export default router
