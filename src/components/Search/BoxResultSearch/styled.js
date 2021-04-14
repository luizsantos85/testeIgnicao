import styled from 'styled-components';

export const BoxArea = styled.div`
  width: 100%;
  box-shadow: 0 1px 4px #ccc;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;

  .boxImg {
    img {
      width: 213px;
      height: 210px;
    }
  }

  .boxBody {
    padding: 10px 20px;
    .titleBody {
      font-size: 16px;
      font-weight: normal;
    }
    .authorBody {
      margin-top: 5px;
      font-size: 12px;
      color: #7e7e7e;
      span {
        font-weight: bold;
      }
    }
    .descriptionBody {
      margin-top: 20px;
      font-size: 14px;
    }
  }
  .boxButtons {
    border-left: 1px solid #dadada;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content:center;

    .reviews {
      padding: 5px;
      width: 60px;
      text-align: center;
      font-size: 14px;
      background-color: #686868;
      color: #fff;
      svg {
        width: 16px;
      }
    }
    .price {
      align-self:center;
      margin-top: 15px;
      font-size: 18px;
    }

    .buttons {
      font-size: 14px;
      margin-top: 30px;
      button {
        margin-top: 10px;
        width: 180px;
        padding: 10px 20px;
        border-radius: 5px;

        svg {
          width: 16px;
        }
      }
      .btn1 {
        background-color: #e5e5e5;
      }
      .btn2 {
        background-color: #686868;
        color: #fff;
      }
    }
  }
`;
