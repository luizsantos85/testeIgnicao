import React from 'react';
import { InputArea,Input } from './styled';
import {Lupa} from '../../../Icons';

const InputSearch = ({ search, onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <InputArea>
      <Input
        placeholder="Buscar"
        type="text"
        onChange={handleChange}
        value={search}
      />
      <img src={Lupa} alt="lupa"/>
    </InputArea>
  );
};

export default InputSearch;
