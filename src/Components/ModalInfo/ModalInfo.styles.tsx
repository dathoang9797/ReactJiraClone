import styled from 'styled-components/macro';

export const ModalContent = styled.div``;
export const ModalHeader = styled.div``;
export const ModalSearchBlock = styled.div``;
export const ModalBody = styled.div``;
export const ModalTaskTitle = styled.div``;
export const ModalTaskClick = styled.div``;
export const ModalComment = styled.div``;
export const ModalInfoCss = styled.div``;

export const ModalInfoContainer = styled.div`
  ${ModalInfoCss} {
    max-width: 1000px !important;
  }

  ${ModalContent} {
    padding: 20px 24px;
    ${ModalHeader} {
      padding: 1rem 2rem;
      border-bottom: none;
      ${ModalTaskTitle} {
        .fa-bookmark {
          color: #5fb03e;
        }
        span {
          margin-left: 10px;
        }
      }

      ${ModalTaskClick} {
        display: flex;
        div span {
          padding-right: 20xp;
        }

        .fa-trash-alt {
          width: 20px !important;
          height: 20px;
        }
        .close {
          padding-bottom: 16px !important;
        }
      }
    }
    ${ModalBody} {
      .issue {
        font-size: 20px;
        font-weight: 500;
      }
      .description p:first-child {
        margin-bottom: 5px;
      }
      .col-4 h6 {
        font-size: 13px;
      }

      .status .custom-select {
        height: 35px;
        background: #dcdfe4;
        margin-bottom: 20px;
      }

      .item {
        margin-right: 20px;
        background: #e9eaf0;
        padding: 5px;
        border-radius: 5px;
        flex-basis: 50%;
      }

      .item .avatar img {
        width: 30px;
        height: 30px;
      }

      .item .name {
        margin: 0;
      }

      .reporter .item {
        width: fit-content;
      }

      .reporter {
        margin-bottom: 20px;
      }

      .estimate-hours {
        height: 35px;
        background: #f2f3f7;
        margin-bottom: 20px;
        border: 1px solid;
        border-color: #ced4da;
        width: 100%;
        padding: 8px;
      }

      .estimate-hours:focus {
        background: white;
      }

      .time-tracking {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ced4da;
      }

      .time-tracking h6 {
        font-size: 12px;
        color: #929398;
      }

      .fa-clock {
        margin-right: 10px;
      }

      .progress {
        height: 5px !important;
        width: 100%;
      }

      .logged,
      .estimate-time {
        font-size: 14px;
      }

      ${ModalComment} {
        .block-comment {
          display: flex;
          .avatar {
            margin-right: 15px;
            img {
              width: 40px;
              border: 1px solid transparent;
              height: 40px;
              border-radius: 50%;
            }
          }

          .input-comment {
            width: 100%;
            input {
              width: 100%;
              height: 45px;
              padding: 10px;
            }
          }
        }
      }
      .lastest-comment {
        .display-comment {
          display: flex;
          .avatar {
            margin-right: 15px;
            img {
              width: 40px;
              border: 1px solid transparent;
              height: 40px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;
