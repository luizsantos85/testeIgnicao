import styled from 'styled-components';

export const SearchArea = styled.div`
  overflow-y: auto;

  .topoSearchArea {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    .leftSide {
      display: flex;
      align-items: center;

      h2 {
        font-size: 24px;
        font-weight: normal;
        padding-right: 30px;
        border-right: 1px solid #2c2c2c;
        margin-right: 10px;
      }
      p {
        margin-right: 5px;
        font-size: 14px;
        &::before {
          content: '>> ';
        }
      }
    }

    .rightSide {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #717171;
      width: 40px;
      height: 40px;
      border-radius: 50%;

      .config {
        color: #fff;
      }
    }
  }

  .topoSearchArea-2 {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 40px 0 20px 0;

    .leftSide {
      width: 300px;
      p {
        font-size: 18px;
      }
    }
    .rightSide {
      display: flex;
      justify-content: space-between;
      width: calc(100% - 300px);
      align-items: flex-end;
      padding-left: 20px;

      p {
        font-size: 18px;
      }

      .buttonsLayout {
        display: flex;
        /* justify-content: space-between; */
        .select select {
          height: 40px;
          width: 130px;
          box-shadow: 0 1px 4px #ccc;
          background-color: #fff;
          border-radius: 5px;
          border: 0;
          padding-left: 5px;
          font-size: 14px;
        }
        .boxIcon {
          margin-left: 10px;
          width: 40px;
          height: 40px;
          box-shadow: 0 1px 4px #ccc;
          background-color: #fff;
          border-radius: 5px;
          cursor: pointer;
          transition: all ease 0.4s;

          &:hover {
            border: 3px solid #ccc;
          }

          svg {
            width: 18px;
            height: 18px;
            color: #606060;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            position: relative;
          }
        }
      }
    }
  }
  
`;

export const ContentSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  .filters {
    width: 300px;
    box-shadow: 0 1px 4px #ccc;
    border-radius: 5px;
    background-color: #fff;
  }
  .contentResultSearch {
    padding-left: 20px;
    width: calc(100% - 300px);

    .contentResultSearch {
    }
  }
`;
