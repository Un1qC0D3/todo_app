const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let todos = []; // Geçici veritabanı

// GET - Listele
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST - Ekle
app.post("/api/todos", (req, res) => {
  const todo = { id: Date.now(), title: req.body.title, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// PUT - Güncelle
app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos[index].done = req.body.done;
    res.json(todos[index]);
  } else {
    res.status(404).json({ message: "Not found" });
  }
});

// DELETE - Sil
app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor: http://localhost:${PORT}`);
});
