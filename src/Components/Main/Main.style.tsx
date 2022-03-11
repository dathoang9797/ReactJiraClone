import styled from 'styled-components/macro';

export const MainHeader = styled.div``;
export const MainInfo = styled.div``;
export const MainSearchBlock = styled.div``;
export const MainAvatarGroup = styled.div``;
export const MainAvatar = styled.div``;
export const MainContent = styled.div``;
export const MainCard = styled.div``;
export const MainCardHeader = styled.div``;
export const MainHeaderNavigation = styled.nav``;
export const MainOlBreadCrumb = styled.ol``;
export const MainLiBreadCrumb = styled.li``;
export const MainInputSearch = styled.input``;
export const MainInfoText = styled.div``;
export const MainUlListGroup = styled.ul``;
export const MainLiListGroupItem = styled.li``;

export const MainContainer = styled.div`
  h3 {
    margin-bottom: 20px;
    margin-left: 10px;
  }

  ${MainHeader} {
    margin-left: 10px;
    ${MainOlBreadCrumb} {
      margin-bottom: 0;
      padding-left: 0px;
      background-color: #fff;
    }
  }

  ${MainInfo} {
    margin-left: 10px;
    display: flex;
    ${MainSearchBlock} {
      position: relative;
      ${MainInputSearch} {
        height: 32px;
        width: 200px;
        background-color: rgb(250, 251, 252);
        border: 2px solid rgb(223, 225, 230);
        border-radius: 3px;
        padding-left: 32px;
      }
      .fa-search {
        position: absolute;
        left: 5%;
        top: 15%;
        color: #67748b;
      }
    }

    ${MainAvatarGroup} {
      margin-left: 20px;
      display: flex;
      ${MainAvatar} img {
        width: 40px;
        border: 1px solid transparent;
        height: 40px;
        border-radius: 50%;
      }
    }

    ${MainAvatar} img {
      width: 40px;
      border: 1px solid transparent;
      height: 40px;
      border-radius: 50%;
    }
    ${MainInfoText} {
      margin-left: 20px;
      text-align: center;
      line-height: 35px;
    }
  }

  ${MainContent} {
    margin-top: 20px;
    display: flex;
    ${MainCard} {
      margin-right: 5px;
      margin-left: 5px;
      background-color: #f4f5f7;
      width: 17rem;
      height: 25rem;
      ${MainCardHeader} {
        border: none;
        background-color: transparent;
        color: #5e6c84;
      }
      ${MainUlListGroup} {
        border: none;
        ${MainLiListGroupItem} {
          margin: 5px;
          cursor: pointer;
          p {
            font-size: 14px;
          }

          .block {
            display: flex;
            justify-content: space-between;
            .block-left {
              line-height: 40px;
              .svg-inline--fa {
                margin-right: 5px;
              }
            }
            .block-right {
              .avatar-group {
                display: flex;
                .avatar {
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
      }
    }
    .fa-bookmark {
      color: #5fb03e;
    }

    .fa-arrow-up {
      color: #d85463;
    }

    .fa-check-square {
      color: #62a0ce;
    }
  }
`;
