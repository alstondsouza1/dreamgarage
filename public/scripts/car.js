const renderCar = async () => {

  const path = window.location.pathname
  const id = path.split('/').pop()

  const response = await fetch(`/cars/${id}/data`)
  const data = await response.json()

  document.getElementById('car-image').src = data.image
  document.getElementById('car-image').alt = data.name

  document.getElementById('name').textContent = data.name

  document.getElementById('manufacturer').textContent =
    `Manufacturer: ${data.manufacturer}`

  document.getElementById('country').textContent =
    `Country: ${data.country}`

  document.getElementById('year').textContent =
    `Year: ${data.year}`

  document.getElementById('horsepower').textContent =
    `Horsepower: ${data.horsepower} HP`

  document.getElementById('category').textContent =
    `Category: ${data.category}`

  document.getElementById('description').textContent =
    data.description
}

renderCar()