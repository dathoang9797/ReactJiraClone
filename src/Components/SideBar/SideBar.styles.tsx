import styled from 'styled-components/macro';

export const SideBarTop = styled.div``;
export const SideBarBottom = styled.div``;
export const SideBarIcon = styled.div``;

export const SideBarContainer = styled.div`
  position: fixed;
  height: 100vh;
  z-index: 10;
  background-color: #065fd4;
  width: 4%;
  transition: 0.2s;

  ${SideBarIcon} {
    cursor: pointer;
  }

  &:hover {
    width: 15%;
    ${SideBarTop} ${SideBarIcon} {
      &:first-child {
        padding: 0 40%;
      }

      &:not(:first-child) {
        padding: 0;
        padding-left: 5%;
      }

      &:not(:first-child) .title {
        opacity: 1;
        color: white;
        font-weight: 500;
      }

      &:not(:first-child) .svg-inline--fa {
        margin-right: 10px;
      }
    }

    ${SideBarBottom} {
      left: 0%;
      width: 100%;
      .svg-inline--fa {
        margin-right: 10px;
      }
      .title {
        opacity: 1;
        color: white;
        font-weight: 500;
      }
    }
  }

  ${SideBarTop} ${SideBarIcon}:first-child {
    padding-top: 20%;
    font-size: 25px;
  }

  ${SideBarBottom} {
    position: absolute;
    bottom: 3%;
    left: 8%;
  }

  ${SideBarIcon} {
    margin-bottom: 20%;
    padding: 0 18%;

    &:not(:first-child) {
      padding: 0 30%;
      height: 30px;
    }

    .svg-inline--fa {
      color: white;
    }
    .title {
      opacity: 0;
    }
  }
`;
