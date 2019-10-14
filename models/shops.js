const shops = [
  {
    name: "Starbucks",
    employees: 28,
    currentlyOpen: true
  },
  {
    name: "Caribou Coffee",
    employees: 14,
    currentlyOpen: true
  },
  {
    name: "Java Monkey",
    employees: 9,
    currentlyOpen: false
  }
]

let getShops = () => {
  return shops
}

let getShop = (index) => {
  return shops[index]
}

let newShop = {}

let createShop = (obj) => {
  newShop = obj
  return newShop
}

let addShop = (shop) => {
  shops.push(shop)
  return shops
}

let updateShop = (index, shop) => {
  shops[index] = shop
  return shops
}

let deleteShop = (index) => {
  shops.splice(index, 1)
  return shops
}

module.exports = {
  getShops,
  getShop,
  newShop,
  createShop,
  addShop,
  updateShop,
  deleteShop
}

