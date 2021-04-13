import React from 'react';
import { InputArea } from './styled';

const InputSearch = ({ search, onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <InputArea
      placeholder="Buscar"
      onChange={handleChange}
      type="text"
      value={search}
    />
  );
};

export default InputSearch;
