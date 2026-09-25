import pool from './database.js'
import carData from '../data/cars.js'

const createCarsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS cars;

    CREATE TABLE cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      manufacturer VARCHAR(255) NOT NULL,
      country VARCHAR(255) NOT NULL,
      year INTEGER NOT NULL,
      horsepower INTEGER NOT NULL,
      category VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description TEXT NOT NULL
    );
  `

  try {
    await pool.query(createTableQuery)
    console.log('🎉 cars table created successfully')
  } catch (error) {
    console.error('⚠️ error creating cars table:', error)
  }
}

const seedCarsTable = async () => {
  try {
    for (const car of carData) {
      const insertQuery = `
        INSERT INTO cars
          (name, manufacturer, country, year, horsepower, category, image, description)
        VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8)
      `

      const values = [
        car.name,
        car.manufacturer,
        car.country,
        car.year,
        car.horsepower,
        car.category,
        car.image,
        car.description
      ]

      await pool.query(insertQuery, values)
    }

    console.log('🎉 cars table seeded successfully')
  } catch (error) {
    console.error('⚠️ error seeding cars table:', error)
  }
}

const resetDatabase = async () => {
  await createCarsTable()
  await seedCarsTable()
  await pool.end()
}

resetDatabase()