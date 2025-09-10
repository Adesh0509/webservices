import express from 'express'
import router from './routes.js'

const app = express()
app.use(express.json())

app.use('/api', router)
app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000')
})
