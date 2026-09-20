const renderCar = async () => {
    const path = window.location.pathname
    const id = path.split('/').pop()
  
    try {
      const response = await fetch(`/cars/${id}/data`)
  
      if (!response.ok) {
        window.location.href = '/404.html'
        return
      }
  
      const data = await response.json()
  
      const carImage = document.getElementById('car-image')
      carImage.src = data.image
      carImage.alt = data.name
  
      const carName = document.getElementById('name')
      carName.textContent = data.name
  
      const carManufacturer = document.getElementById('manufacturer')
      carManufacturer.textContent = `Manufacturer: ${data.manufacturer}`
  
      const carCountry = document.getElementById('country')
      carCountry.textContent = `Country: ${data.country}`
  
      const carYear = document.getElementById('year')
      carYear.textContent = `Year: ${data.year}`
  
      const carHorsepower = document.getElementById('horsepower')
      carHorsepower.textContent = `Horsepower: ${data.horsepower} HP`
  
      const carCategory = document.getElementById('category')
      carCategory.textContent = `Category: ${data.category}`
  
      const carDescription = document.getElementById('description')
      carDescription.textContent = data.description
  
    } catch (error) {
      console.error('Error loading car:', error)
    }
  }
  
  renderCar()