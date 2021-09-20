import { memo } from "react";
import { useState } from "react";

const SearchForm = ({onSubmit}) => {
    const [keyWord, setKeyWord] = useState("");
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        onSubmit(keyWord)
    };
    
    const handleChange = (ev) => {
        setKeyWord(ev.target.value);
      };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input type="text" value={keyWord} onChange={handleChange} />
    </form>
  );
};

export default memo(SearchForm);
