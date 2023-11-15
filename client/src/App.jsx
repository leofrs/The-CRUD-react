import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const [books, setData] = useState([]);
  const [books2, setBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const d = await axios.get("http://localhost:8800/books");
        setData(d.data);
      } catch (error) {
        console.log("Erro encontrado" + error);
      }
    };
    fetchData();
  }, []);

  const refTitle = useRef();
  const refDescription = useRef();
  const refCover = useRef();

  const handleSubmit = async (e) => {
    const newBook = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      cover: refCover.current.value,
    };
    setBook(newBook);
    try {
      await axios.post("http://localhost:8800/books", newBook);
      refTitle.current.value = "";
      refDescription.current.value = "";
      refCover.current.value = "";
    } catch (error) {
      console.log("Erro encontrado" + error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      // Atualizar a lista de livros após a remoção
      const updatedBooks = books.filter((book) => book.id !== id);
      setData(updatedBooks);
    } catch (error) {
      console.log("Erro ao remover o livro" + error);
    }
  };

  return (
    <div>
      <h1>Dados</h1>
      {books.map((item) => {
        const { id, title, description, cover } = item;
        return (
          <div key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{cover}</p>
            <button onClick={() => handleRemove(id)}>Remove</button>
          </div>
        );
      })}

      <h2>Adicionando os dados</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira um nome" ref={refTitle} />
        <input
          type="text"
          placeholder="Insira uma descrição"
          ref={refDescription}
        />
        <input type="text" placeholder="Insira um valor" ref={refCover} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default App;
