import styled from 'styled-components';

export const LinkArea = styled.div`
  display: flex;
  align-items: center;
  color: #2c2c2c;
  background-color: ${(props) => (props.active ? '#e5e5e5' : 'transparent')};
  margin: 10px 0;
  border-radius: 5px;
  transition: all ease 0.4s;
  cursor:pointer;

  .linkIcon{
    display:flex;
    align-items: center;
    
    .icon{
      width: 20px;
      height: 20px;
      font-weight: bold;
    }
    .text {
      font-size: 14px;
      color: #2c2c2c;
      margin-left: 10px;
    }
  }

`;


