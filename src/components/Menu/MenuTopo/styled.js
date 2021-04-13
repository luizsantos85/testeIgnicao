import styled from 'styled-components';

export const AreaMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px #ccc;
  border-radius: 5px;
  width: 100%;
  height: 62px;
  margin-bottom: 30px;
  background-color: #fff;

  .leftSide {
    display: flex;
    padding-left: 22px;

    .star {
      color: #ccc;
    }
  }

  .rightSide {
    display: flex;
    padding-right: 19px;
  }

  .userAreaInfo {
    display: flex;
    align-items: center;
    margin-left: 30px;

    .userInfo {
      color: #2c2c2c;
      .userName {
        font-size: 14px;
      }
      .userStatus {
        font-size: 11px;
        font-weight: lighter;
        text-align: right;
      }
    }
    .userAvatar {
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
