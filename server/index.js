import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin147",
  database: "test",
});

app.get("/", (req, res) => {
  res.json("Seja bem vindo ao backend");
});

// Realiza a consulta no banco de dados
app.get("/books", (req, res) => {
  const queryDb = "SELECT * FROM books";
  db.query(queryDb, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

// Realiza o post no banco de dados
app.post("/books", (req, res) => {
  const queryDb =
    "INSERT INTO books (`title`, `description`, `cover`) VALUES (?, ?, ?)";
  const { title, description, cover } = req.body;
  const values = [title, description, cover];

  db.query(queryDb, values, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

// Rota para deletar um livro pelo ID
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  console.log("Deleting book with ID:", bookId);
  const queryDb = "DELETE FROM books WHERE id = ?";

  db.query(queryDb, [bookId], (error, data) => {
    if (error) {
      console.error("Error deleting book:", error);
      return res.json(error);
    }
    console.log("Book deleted successfully");
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Conectado ao servidor!");
});
