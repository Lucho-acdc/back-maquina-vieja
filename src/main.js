import express from 'express';
import productsRouter from './routers/productsRouter.js';
import cartsRouter from './routers/cartsRouter.js';

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('public'))

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

