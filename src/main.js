import express from 'express';
import { ProductManager } from './productManager.js'; 

const app = express();
const port = 8080;

const productManager = new ProductManager();

// Endpoint para obtener todos los productos
app.get('/products', async (req, res) => {
  try {
    const limit = req.query.limit;
    const products = await productManager.getAllProducts(limit);
    console.log("Productos enviados:", products);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint para obtener un producto por ID
app.get('/products/:pid', async (req, res) => {
  try {
    const productId = req.params.pid;
    const product = await productManager.getProductById(productId);
    
    if (product) {
      console.log("Producto encontrado:", product);
      res.json(product);
    } else {
      console.log("Producto no encontrado.");
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
