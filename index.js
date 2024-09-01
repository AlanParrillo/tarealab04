const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal!');
});

app.get('/clientes', (req, res) => {
  const clientes = [
    { id: 1, nombre: 'Alan' },
    { id: 2, nombre: 'Juan' },
    { id: 3, nombre: 'Sergio' },
  ];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = [
    { id: 1, nombre: 'Audifonos' },
    { id: 2, nombre: 'Computadora' },
    { id: 3, nombre: 'Laptop' },
  ];
  res.json(productos);
});

// Configuración para POST, PUT y DELETE (solo ejemplos)
app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  res.status(201).send(`Producto ${nuevoProducto.nombre} agregado!`);
});

app.put('/productos/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Producto con ID ${id} actualizado!`);
});

app.delete('/productos/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Producto con ID ${id} eliminado!`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
