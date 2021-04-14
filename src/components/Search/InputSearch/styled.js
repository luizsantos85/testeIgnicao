import styled from 'styled-components';

export const InputArea = styled.div`
  img{
    position:relative;
    top: -50px;
    left: 92%;
    
  }
`;
export const Input = styled.input`
  width: 99%;
  height: 40px;
  border: 0;
  border-radius: 5px;
  padding-left: 20px;
  font-size: 20px;
  color: #2c2c2c;
  background-color: #fff;
  box-shadow: 0 1px 4px #ccc;
  margin-bottom: 20px;

  &:focus {
    border: 3px solid #ccc;
  }
`;