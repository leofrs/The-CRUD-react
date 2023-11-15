import useFetchData from "../hooks/useFetchData";
import useRefCustom from "../hooks/useRefCustom";

import "../style/formStyle.scss";

const Form = () => {
  const { handleSubmit } = useFetchData();
  const { refTitle, refDescription, refCover } = useRefCustom();

  return (
    <div className="formContainer">
      <div className="addForm">
        <form onSubmit={handleSubmit} className="form">
          <h2>Adicionando os dados</h2>
          <input type="text" placeholder="Insira um nome" ref={refTitle} />
          <input
            type="text"
            placeholder="Insira uma descrição"
            ref={refDescription}
          />
          <input type="text" placeholder="Insira um valor" ref={refCover} />
          <button type="submit" className="addHome">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
