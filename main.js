import crypto from 'crypto';

class ProductManager {
  
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Parte para que los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios.");
        return;
      }
  
      // Parte para que el código no se repita
      if (this.products.some(product => product.code === code)) {
        console.log("El código ya está en uso.");
        return;
      }
  
      const newProduct = {
        id: crypto.randomBytes(10).toString('hex'),
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(newProduct);
      console.log("Producto agregado correctamente.");
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(code) {
      const product = this.products.find(product => product.code === code);
  
      if (!product) {
        console.log("Producto no encontrado.");
      }
  
      return product;
    }
  }
  
  // Parte para probar

  const productManager = new ProductManager();
  
  // Agrego un producto
  productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
  
  // Verificando que se haya agregado
  const productsAdded = productManager.getProducts();
  console.log("Productos después de agregar uno:", productsAdded);
    
  // Verificando que no permita agregar uno igual
  try {
    productManager.addProduct("Producto prueba", "Este es un producto prueba", 200, "Sin imagen",  "abc123", 25);
  } catch (error) {
    console.error("Error:", error.message);
  }
  
  // Verifico que getProductById funcione, solo que cambie el "id" por el "code" para no estar almacenando el id aleatorio, solo para usarlo para buscar.
  
  const productIdToFind = 'abc123';

  const foundProduct = productManager.getProductById(productIdToFind);
  
  if (foundProduct) {
    console.log("Producto encontrado por code:", foundProduct);
  } else {
    console.error("Producto no encontrado por code.");
  }




  