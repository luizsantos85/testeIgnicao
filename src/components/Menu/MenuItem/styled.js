import styled from 'styled-components';

export const LinkArea = styled.div`
  display: flex;
  align-items: center;
  color: #2c2c2c;
  background-color: ${(props) => (props.active ? '#e5e5e5' : 'transparent')};
  margin: 10px;
  padding: 5px 0;
  transition: all ease 0.4s;
  cursor: pointer;
  border-radius: 5px;

  .linkIcon {
    display: flex;
    align-items: center;
    padding: 5px 0;

    .icon {
      width: 20px;
      height: 20px;
      font-weight: bold;
    }
  }
  .text {
    font-size: 14px;
    color: #2c2c2c;
  }
`;
