const express = require('express')

const shopsApi = require('../models/shops.js')

const shopsRouter = express.Router()

shopsRouter.get('/shops', (req, res) => {
  res.json(shopsApi.getShops())
})

shopsRouter.post('/shops/new/:obj', (req, res) => {
  res.json(shopsApi.createShop(req.params.obj))
})

shopsRouter.post('/shops/add/:shop', (req, res) => {
  res.json(shopsApi.addShop(req.params.shop))
})

shopsRouter.put('/shops/update/:index', (req, res) => {
  res.json(shopsApi.updateShop(req.params.index, req.body))
})

shopsRouter.delete('/shops/delete/:index', (req, res) => {
  res.json(shopsApi.deleteShop(req.params.index))
})

shopsRouter.get('/shops/:index', (req, res) => {
  let index = req.params.index
  res.json(getShop(index))
})

module.exports = {
  shopsRouter
}