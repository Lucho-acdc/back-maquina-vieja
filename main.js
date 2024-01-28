// import { promises as fs } from 'fs';
// import crypto from 'crypto';

// const RUTA = './products.json';  

// class ProductManager {
//   constructor() {
//     this.products = [];
//     this.loadProducts();
//   }

//   async loadProducts() {
//     try {
//       const data = await fs.readFile(RUTA, 'utf-8');
//       this.products = JSON.parse(data);
//     } catch (error) {
//       this.products = [];
//     }
//   }

//   async saveProducts() {
//     try {
//       if (this.products.length > 0) {
//         const data = JSON.stringify(this.products, null, 2);
//         await fs.writeFile(RUTA, data, 'utf-8');
//         console.log("Productos guardados correctamente.");
//       } else {
//         console.log("No hay productos para guardar.");
//       }
//     } catch (error) {
//       console.error("Error al guardar productos:", error);
//     }
//   }
  

//   addProduct(product) {

//     product.id = crypto.randomBytes(10).toString('hex');
//     this.products.push(product);

//     this.saveProducts().then(() => {
//       console.log("Producto agregado correctamente.");
//     }).catch(error => {
//       console.error("Error al guardar productos:", error);
//     });
//   }

//   getProducts() {
//     return this.products;
//   }

//   getProductById(id) {
//     const foundProduct = this.products.find(product => product.id === id);
//     return foundProduct;
//   }

//   async updateProduct(id, updatedFields) {
//     const index = this.products.findIndex(product => product.id === id);
//     if (index !== -1) {
//       Object.keys(updatedFields).forEach(key => {
//         if (typeof this.products[index][key] === 'number' && typeof updatedFields[key] === 'number') {
//           this.products[index][key] += updatedFields[key];
//         } else {
//           this.products[index][key] = updatedFields[key];
//         }
//       });
  
//       await this.saveProducts();
  
//       console.log("Producto actualizado correctamente.");
//     } else {
//       console.error("Producto no encontrado.");
//     }
//   }

//   async deleteProduct(id) {
//     const index = this.products.findIndex(product => product.id === id);
//     if (index !== -1) {

//       this.products.splice(index, 1);

//       await this.saveProducts();

//       console.log("Producto eliminado correctamente.");
//     } else {
//       console.error("Producto no encontrado.");
//     }
//   }
// }

// // Parte para probar

// const productManager = new ProductManager();

// // Agrego un producto
// productManager.addProduct({
//   title: 'Producto de prueba',
//   description: 'Este es un producto de prueba',
//   price: 200,
//   thumbnail: 'Sin imagen',
//   code: 'abc123',
//   stock: 25,
// });

// productManager.addProduct({
//   title: 'Producto de prueba 2',
//   description: 'Este es un producto de prueba 2',
//   price: 250,
//   thumbnail: 'Sin imagen',
//   code: '1234abc',
//   stock: 2,
// });

// // Verificando que se haya agregado
// const products = productManager.getProducts();
// console.log("Productos después de agregar uno:", products);

// // Verificando que se actualicen los datos de uno de los productos
// productManager.updateProduct('abc123', { price: 250, stock: 30 });
// console.log("Productos después de actualizarlo:", products);

// productManager.deleteProduct('abc123');

// // Verificando que se haya eliminado uno de los productos
// const productsAfterDelete = productManager.getProducts();
// console.log("Productos después de eliminar uno:", productsAfterDelete);


// Hecho con code para poder probar los metodos ya que el ID es único

import { promises as fs } from 'fs';
import crypto from 'crypto';

const RUTA = './products.json';  

class ProductManager {
  constructor() {
    this.products = [];
    this.loadProducts();
  }

  async loadProducts() {
    try {
      const data = await fs.readFile(RUTA, 'utf-8');
      this.products = JSON.parse(data);
    } catch (error) {
      this.products = [];
    }
  }

  async saveProducts() {
    try {
      if (this.products.length > 0) {
        const data = JSON.stringify(this.products, null, 2);
        await fs.writeFile(RUTA, data, 'utf-8');
        console.log("Productos guardados correctamente.");
      } else {
        console.log("No hay productos para guardar.");
      }
    } catch (error) {
      console.error("Error al guardar productos:", error);
    }
  }
  

  addProduct(product) {

    product.code = crypto.randomBytes(10).toString('hex');
    this.products.push(product);

    this.saveProducts().then(() => {
      console.log("Producto agregado correctamente.");
    }).catch(error => {
      console.error("Error al guardar productos:", error);
    });
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const foundProduct = this.products.find(product => product.id === id);
    return foundProduct;
  }

  async updateProduct(id, updatedFields) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      Object.keys(updatedFields).forEach(key => {
        if (typeof this.products[index][key] === 'number' && typeof updatedFields[key] === 'number') {
          this.products[index][key] += updatedFields[key];
        } else {
          this.products[index][key] = updatedFields[key];
        }
      });
  
      await this.saveProducts();
  
      console.log("Producto actualizado correctamente.");
    } else {
      console.error("Producto no encontrado.");
    }
  }

  async deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {

      this.products.splice(index, 1);

      await this.saveProducts();

      console.log("Producto eliminado correctamente.");
    } else {
      console.error("Producto no encontrado.");
    }
  }
}

// Parte para probar

const productManager = new ProductManager();

// Agrego un producto
productManager.addProduct({
  title: 'Producto de prueba',
  description: 'Este es un producto de prueba',
  price: 200,
  thumbnail: 'Sin imagen',
  id: 'abc123',
  stock: 25,
});

productManager.addProduct({
  title: 'Producto de prueba 2',
  description: 'Este es un producto de prueba 2',
  price: 250,
  thumbnail: 'Sin imagen',
  id: '1234abc',
  stock: 2,
});

// Verificando que se haya agregado
const products = productManager.getProducts();
console.log("Productos después de agregar uno:", products);

// Verificando que se actualicen los datos de uno de los productos
productManager.updateProduct('abc123', { price: 250, stock: 30 });
console.log("Productos después de actualizarlo:", products);

productManager.deleteProduct('abc123');

// Verificando que se haya eliminado uno de los productos
const productsAfterDelete = productManager.getProducts();
console.log("Productos después de eliminar uno:", productsAfterDelete);
