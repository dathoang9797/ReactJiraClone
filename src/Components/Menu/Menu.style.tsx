import styled from 'styled-components/macro';

export const MenuAccount = styled.div``;
export const MenuAccountInfo = styled.div``;
export const MenuAvatar = styled.div``;
export const MenuControl = styled.div``;
export const MenuFeature = styled.div``;
export const MenuContainer = styled.div`
  width: 20%;
  background-color: #f4f5f7;
  ${MenuAccount} {
    display: flex;
    padding: 5% 17%;
    margin-bottom: 5%;
    ${MenuAvatar} {
      padding-top: 13%;
      margin-right: 10px;
      img {
        width: 50px;
      }
    }
    ${MenuAccountInfo} {
      padding-top: 12%;
      padding-bottom: 5%;
      text-align: left;
      & p:first-child {
        margin-bottom: 3px;
        font-weight: 500;
      }
      & p:last-child {
        margin-top: 0px;
        font-weight: 300;
      }
    }
  }

  ${MenuControl} {
    padding: 0% 10%;
    text-align: left;
    margin-bottom: 8%;
    border-bottom: 2px solid #c4c5c6;
    margin-left: 7%;
    margin-right: 7%;
    div {
      margin-bottom: 10px;
      padding: 2% 3%;
      cursor: pointer;
      &:focus {
        color: royalblue;
      }
      span:first-child {
        margin-right: 10px;
        &:focus {
          background-color: #ebecf0;
        }
      }
      .svg-inline--fa {
        margin-right: 5px;
      }
    }
  }

  ${MenuFeature} {
    padding: 0% 10%;
    text-align: left;
    margin-bottom: 8%;
    margin-left: 7%;
    margin-right: 7%;
    div {
      margin-bottom: 5px;
      padding: 2% 3%;
      cursor: pointer;
      .svg-inline--fa {
        margin-right: 5px;
      }
      span {
        font-size: 14px;
      }
    }
  }
`;
