console.log('sanity check!')

const productDiv = document.getElementById('products')
const productList = document.createElement('DIV')

const filteredProducts = data.products




productDiv.append(productList)


const parentDiv = document.getElementById('filter')
const filterList = document.createElement('UL')

const filterNames = Object.keys(filterCategories)


// go through products, find all the tag names and add to an array.
// then populate the list items on click.

// typeof tags = "array"

const parameter = filterNames[0]
const tagNames = []
for(let item in filteredProducts) {
  filteredProducts[item].tags.forEach(tag => {
    if(!tagNames.includes(tag)) {
      tagNames.push(tag)
    }
  })
}

const tagList = document.createElement('ul')
tagNames.forEach(tag => {
  const newTag = document.createElement('li')
  newTag.textContent = tag
  tagList.append(newTag)

  newTag.addEventListener('click', e => {
    const newFilteredProducts = filteredProducts.filter(product => {
      return product.tags.includes(tag)
    })
    productList.innerHTML = ""

    newFilteredProducts.forEach(product => {
      const newEl = document.createElement('DIV')
      newEl.innerHTML = `<div class="card product-card" style="width: 20rem;">`
          + `<img class="card-img-top" src="${product.image}" alt="an image of ${product.name}">`
          + `<div class="card-block"><h3 class="card-title">${product.name} <span class="price">${product.price}</span></h3>`
          + `<p class="card-text">${product.description}</p>`
          + `<a href="#" class="btn btn-primary">Add to Cart</a>`
          + `</div></div>`
      productList.append(newEl)
    })
  })



})
filterList.append(tagList)


filteredProducts.forEach(product => {
  const newEl = document.createElement('DIV')
  newEl.innerHTML = `<div class="card product-card" style="width: 20rem;">`
      + `<img class="card-img-top" src="${product.image}" alt="an image of ${product.name}">`
      + `<div class="card-block"><h3 class="card-title">${product.name} <span class="price">${product.price}</span></h3>`
      + `<p class="card-text">${product.description}</p>`
      + `<a href="#" class="btn btn-primary">Add to Cart</a>`
      + `</div></div>`
  productList.append(newEl)
})

// typeof name = "string"

// filterNames.forEach(category => {
//   const newFilter = document.createElement('LI')
//   newFilter.textContent = category
//
//   newFilter.addEventListener('click', e => {
//     if(e.target.children.length !== 0) {
//       for(let i=0; i < e.target.children.length; i++) {
//         e.target.children[i].remove()
//       }
//     } else {
//       const parameters = filterCategories[category]
//       const parameterList = document.createElement('UL')
//       parameters.forEach(parameter => {
//         const newEl = document.createElement('LI')
//         newEl.textContent = parameter
//         parameterList.append(newEl)
//       })
//       e.target.append(parameterList)
//     }
//
//   })
//
//   filterList.append(newFilter)
// })

parentDiv.append(filterList)
