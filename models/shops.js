const express = require('express')
const app = express()

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
];

let getShops = function() {
  return shops
}

let getShop = function(index) {
  return shops[index]
}

let createShop = function() {
  let newShop = {
    name: "shopName",
    employees: 20,
    currentlyOpen: false
  }  
  return newShop
}

app.get('/shops', (req, res) => {
  res.send(getShops())
})

app.get('/shops/new', (req, res) => {
  res.send(createShop())
})

app.get('/shops/:index', (req, res) => {
  let index = req.params.index
  res.send(getShop(index))
})

app.listen(3000)

