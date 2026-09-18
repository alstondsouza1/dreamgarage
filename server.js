import express from 'express'
import carsRouter from './routes/cars.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.use('/cars', carsRouter)

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})