import styled from 'styled-components/macro';

export const ModalContent = styled.div``;
export const ModalHeader = styled.div``;
export const ModalSearchBlock = styled.div``;
export const ModalBody = styled.div``;
export const ModalSearchCss = styled.div``;

export const ModalSearchContainer = styled.div`
  ${ModalSearchCss} {
    margin: 0px !important;
  }

  ${ModalContent} {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    height: 100vh;
    ${ModalHeader} {
      border-bottom: none;
      ${ModalSearchBlock} {
        position: relative;
        width: 100%;
        .search {
          height: 32px;
          border: none;
          border-bottom: 2px solid #7094ce;
          padding-left: 32px;
          width: 100%;
        }
        .fa-search {
          position: absolute;
          left: 5%;
          top: 15%;
          color: #67748b;
        }
      }
    }
  }

  ${ModalBody} {
    div {
      height: 50px;
    }
    div .icon {
      padding: 3% 0px;
      margin-right: 15px;
    }
    div div p {
      margin: 0;
      font-size: 16px;
    }
    div div p:last-child {
      color: grey;
    }
  }
`;
