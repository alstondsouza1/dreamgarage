import pool from '../config/database.js'

// Get all cars
const getCars = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM cars ORDER BY id')
    res.status(200).json(results.rows)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Get one car
const getCarById = async (req, res) => {
  try {
    const id = parseInt(req.params.carId)

    const results = await pool.query(
      'SELECT * FROM cars WHERE id = $1',
      [id]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({ message: 'Car not found' })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

export { getCars, getCarById }