import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  background-color: #fff;
  width: 280px;
  flex-direction: column;
  box-shadow: 0 1px 4px #ccc;
  padding: 10px 20px;

  select {
    width: 236px;
    height: 30px;
    background-color: #e5e5e5;
    border: 0;
    color: #2c2c2c;
    border-radius: 5px;
    padding: 5px 0;
  }

  .areaMenuItems {
    margin-top: 60px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 14px;
      color: #999;
      line-height: 36px;
    }
  }

  img {
    width: 158px;
    height: 52px;
    margin: 25px;
  }
`;
