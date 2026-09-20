const renderCars = async () => {

    const response = await fetch('/cars')
    const data = await response.json()
  
    const carsContainer = document.getElementById('cars-container')
  
    if (data) {
  
      data.forEach(car => {
  
        const carCard = document.createElement('article')
  
        const carImage = document.createElement('img')
        carImage.src = car.image
        carImage.alt = car.name
  
        const carName = document.createElement('h2')
        carName.textContent = car.name
  
        const carManufacturer = document.createElement('p')
        carManufacturer.textContent = `Manufacturer: ${car.manufacturer}`
  
        const carHorsepower = document.createElement('p')
        carHorsepower.textContent = `Horsepower: ${car.horsepower} HP`
  
        const carCategory = document.createElement('p')
        carCategory.textContent = `Category: ${car.category}`
  
        const viewCar = document.createElement('a')
        viewCar.textContent = 'View Car'
        viewCar.href = `/cars/${car.id}`
  
        carCard.appendChild(carImage)
        carCard.appendChild(carName)
        carCard.appendChild(carManufacturer)
        carCard.appendChild(carHorsepower)
        carCard.appendChild(carCategory)
        carCard.appendChild(viewCar)
  
        carsContainer.appendChild(carCard)
  
      })
  
    } else {
  
      const message = document.createElement('h2')
      message.textContent = 'No Cars Available'
  
      carsContainer.appendChild(message)
    }
  }
  
  renderCars()