const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
});

app.use(cors());
app.use(express.json());

// Sample endpoint to get products
app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Simulated checkout endpoint
app.post('/api/checkout', (req, res) => {
  console.log('Order received:', req.body.cart);
  res.json({ message: 'Order placed successfully!' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
