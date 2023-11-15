import { useState, useEffect } from "react";

import axios from "axios";

import useRefCustom from "./useRefCustom";

const useCRUD = () => {
  const [books, setData] = useState([]);
  const [books2, setBook] = useState([]);

  const { refTitle, refDescription, refCover } = useRefCustom();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      const updatedBooks = books.filter((book) => book.id !== id);
      setData(updatedBooks);
    } catch (error) {
      console.log("Erro ao remover o livro" + error);
    }
  };

  return { books, handleRemove, handleSubmit };
};

export default useCRUD;
