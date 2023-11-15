import useFetchData from "../hooks/useFetchData";

import "../style.scss";

const Home = () => {
  const { books, handleRemove } = useFetchData();
  return (
    <div className="books">
      <h1>Dados</h1>
      {books.map((item) => {
        const { id, title, description, cover } = item;
        return (
          <div className="book" key={id}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{cover}</p>
            <button onClick={() => handleRemove(id)} className="delete">
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
