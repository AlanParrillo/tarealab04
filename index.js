const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON en el cuerpo de la solicitud
app.use(express.json());

// Lista en memoria para almacenar productos (simulación de una base de datos)
let productos = [
  { id: 1, nombre: 'Audifonos' },
  { id: 2, nombre: 'Computadora' },
  { id: 3, nombre: 'Laptop' }
];

// Ruta para agregar un nuevo producto
app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  productos.push(nuevoProducto); // Agrega el nuevo producto a la lista
  res.status(201).send(`Producto ${nuevoProducto.nombre} agregado!`);
});

// Ruta para actualizar un producto existente
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const nuevoNombre = req.body.nombre;
  const producto = productos.find(p => p.id === id);

  if (producto) {
    producto.nombre = nuevoNombre; // Actualiza el nombre del producto
    res.send(`Producto con ID ${id} actualizado a ${nuevoNombre}!`);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

// Ruta para eliminar un producto existente
app.delete('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index !== -1) {
    productos.splice(index, 1); // Elimina el producto de la lista
    res.send(`Producto con ID ${id} eliminado!`);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
