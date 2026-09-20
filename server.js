import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import carsRouter from './routes/cars.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static('public'))

app.use('/cars', carsRouter)

// 404 page - keep this after all other routes
app.use((req, res) => {
  res.status(404).sendFile(
    path.resolve(__dirname, 'public/404.html')
  )
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})