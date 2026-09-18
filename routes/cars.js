import express from 'express'
import carData from '../data/cars.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(carData)
})

export default router