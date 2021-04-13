import styled from 'styled-components';

export const InputArea = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 20px;
  color: #2c2c2c;
  background-color: #fff;
  background-image: url('../../../assets/search.svg');
  background-size: 30px;
  background-repeat: no-repeat;
  background-position:center;

  &:focus {
    border: 3px solid #ccc;
  }
`;
