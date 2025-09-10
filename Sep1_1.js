import dotenv from 'dotenv'
import express from 'express'
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.get("/api", (req, res) => {
  res.send("Hello")
})

app.listen(PORT, () => {
  console.log( `connected on ${PORT}`)
})

//console.log("PORT=" + process.env.PORT)
//console.log("Author=" + process.env.AUTHOR)
