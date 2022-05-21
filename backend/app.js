const express = require('express');
const app = express()

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const Cart = require('./cart');
const Product = require('./product');
const port = 3333
const productService = require('./productService');
const cart = new Cart(productService);

cart.setProduct('44225589', 3);
cart.setProduct('23948237', 2);

app.get('/api/products/', (req, res) => {
  res.send(productService.getProducts())
})

app.get('/api/cart/', (req, res) => {
  setTimeout(() => {
    res.send(cart.toResponse())
  }, 2000);
})

app.put('/api/cart/items/:productId/', (req, res) => {
  const productId = req.params.productId

  try {
    const quantity = req.body.quantity;
    cart.setProduct(productId, quantity);
    res.send(cart.getCartHead())
  }
  catch(e) {
    res.sendStatus(400);
    return
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})