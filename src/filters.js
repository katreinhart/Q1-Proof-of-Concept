// filters... price, tags, climate zones, seasons
// const dataSet = require('../products')
const filters = {}

filters.price = function(dataSet, price) {
  const results = []
  dataSet.products.forEach(item => {
     if(item.price <= 1.00) {
       results.push(item)
     }
  })

  return results
}

filters.tags = function(dataSet, tag) {
  const results = []

  dataSet.products.forEach(item => {
    if(item.categories.includes(tag)){
      results.push(item)
    }
  })

  return results
}

filters.zones = function(dataSet, zone) {
  const results = []

  dataSet.products.forEach(item => {
    if(item.climateZones.includes(zone)){
      results.push(item)
    }
  })

  return results
}

filters.seasons = function(dataSet, season) {
  const results = []

  dataSet.products.forEach(item => {
    if(item.season === season){
      results.push(item)
    }
  })

  return results
}
