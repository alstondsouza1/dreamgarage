import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import pool from '../config/database.js'
import { getCars, getCarById } from '../controllers/cars.js'

const router = express.Router()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Get all cars from PostgreSQL
router.get('/', getCars)

// Get individual car data from PostgreSQL
router.get('/:carId/data', getCarById)

// Get individual car page
router.get('/:carId', async (req, res) => {
  try {
    const requestedID = parseInt(req.params.carId)

    const results = await pool.query(
      'SELECT id FROM cars WHERE id = $1',
      [requestedID]
    )

    if (results.rows.length > 0) {
      res.status(200).sendFile(
        path.resolve(__dirname, '../public/car.html')
      )
    } else {
      res.status(404).sendFile(
        path.resolve(__dirname, '../public/404.html')
      )
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
})

export default router