import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import carData from '../data/cars.js'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Return all cars
router.get('/', (req, res) => {
  res.status(200).json(carData)
})

// Display individual car page
router.get('/:carId', (req, res) => {
  res.status(200).sendFile(
    path.resolve(__dirname, '../public/car.html')
  )
})

export default router