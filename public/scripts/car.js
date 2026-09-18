const renderCar = async () => {

    // Get car ID from URL
    const requestedID = parseInt(
      window.location.pathname.split('/').pop()
    )
  
    // Get all cars from Express
    const response = await fetch('/cars')
    const data = await response.json()
  
    // Find matching car
    const car = data.find(car => car.id === requestedID)
  
    const carContent = document.getElementById('car-content')
  
    if (car) {
  
      document.getElementById('name').textContent = car.name
  
      document.getElementById('manufacturer').textContent =
        `Manufacturer: ${car.manufacturer}`
  
      document.getElementById('country').textContent =
        `Country: ${car.country}`
  
      document.getElementById('year').textContent =
        `Year: ${car.year}`
  
      document.getElementById('horsepower').textContent =
        `Horsepower: ${car.horsepower} HP`
  
      document.getElementById('category').textContent =
        `Category: ${car.category}`
  
      document.getElementById('description').textContent =
        car.description
  
      document.title = `DreamGarage - ${car.name}`
  
    } else {
  
      const message = document.createElement('h2')
      message.textContent = 'Car Not Found'
  
      carContent.appendChild(message)
    }
  }
  
  renderCar()