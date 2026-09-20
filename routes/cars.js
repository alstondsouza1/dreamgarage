import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import carData from '../data/cars.js'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get all cars
router.get('/', (req, res) => {
  res.status(200).json(carData)
})

// Get individual car page
router.get('/:carId', (req, res) => {
  const requestedID = parseInt(req.params.carId)

  const car = carData.find(car => car.id === requestedID)

  if (car) {
    res.status(200).sendFile(
      path.resolve(__dirname, '../public/car.html')
    )
  } else {
    res.status(404).sendFile(
      path.resolve(__dirname, '../public/404.html')
    )
  }
})

export default router