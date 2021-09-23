import { memo } from "react";
import { useState } from "react";

const SearchForm = ({onSubmit}) => {
    const [keyword, setkeyword] = useState("");
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
        onSubmit(keyword)
    };
    
    const handleChange = (ev) => {
        setkeyword(ev.target.value);
      };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input type="text" value={keyword} onChange={handleChange} />
    </form>
  );
};

export default memo(SearchForm);
