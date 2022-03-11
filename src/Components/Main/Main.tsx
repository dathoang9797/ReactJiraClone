import React from 'react';
import { MainAvatar, MainAvatarGroup, MainOlBreadCrumb, MainCard, MainCardHeader, MainContainer, MainContent, MainHeader, MainInfo, MainSearchBlock, MainHeaderNavigation, MainLiBreadCrumb, MainInputSearch, MainInfoText, MainLiListGroupItem, MainUlListGroup } from './Main.style';
import { IMAGESJIRA } from '@Assets/images';
const { download1, download2, download3 } = IMAGESJIRA;

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainHeader>
          <MainHeaderNavigation aria-label='breadcrumb'>
            <MainOlBreadCrumb className='breadcrumb'>
              <MainLiBreadCrumb className='breadcrumb-item'>Project</MainLiBreadCrumb>
              <MainLiBreadCrumb className='breadcrumb-item'>CyberLearn</MainLiBreadCrumb>
              <MainLiBreadCrumb className='breadcrumb-item active' aria-current='page'>
                Cyber Board
              </MainLiBreadCrumb>
            </MainOlBreadCrumb>
          </MainHeaderNavigation>
        </MainHeader>
        <h3>Cyber Board</h3>
        <MainInfo>
          <MainSearchBlock>
            <MainInputSearch />
            <i className='fa fa-search' />
          </MainSearchBlock>
          <MainAvatarGroup>
            <MainAvatar>
              <img src={download1} alt='@a' />
            </MainAvatar>
            <MainAvatar>
              <img src={download2} alt='@a' />
            </MainAvatar>
            <MainAvatar>
              <img src={download3} alt='@a' />
            </MainAvatar>
          </MainAvatarGroup>
          <MainInfoText>Only My Issues</MainInfoText>
          <MainInfoText>Recently Updated</MainInfoText>
        </MainInfo>
        <MainContent>
          <MainCard className='card'>
            <MainCardHeader className='card-header'>BACKLOG 3</MainCardHeader>
            <MainUlListGroup className='list-group list-group-flush'>
              <MainLiListGroupItem className='list-group-item' data-toggle='modal' data-target='#infoModal'>
                <p>Each issue has a single reporter but can have multiple assignees</p>
                <div className='block'>
                  <div className='block-left'>
                    <i className='fa fa-bookmark' />
                    <i className='fa fa-arrow-up' />
                  </div>
                  <div className='block-right'>
                    <div className='avatar-group'>
                      <div className='avatar'>
                        <img src={download1} alt='@a' />
                      </div>
                      <div className='avatar'>
                        <img src={download2} alt='@a' />
                      </div>
                    </div>
                  </div>
                </div>
              </MainLiListGroupItem>
              <MainLiListGroupItem className='list-group-item'>
                <p>Each issue has a single reporter but can have multiple assignees</p>
                <div className='block'>
                  <div className='block-left'>
                    <i className='fa fa-check-square' />
                    <i className='fa fa-arrow-up' />
                  </div>
                  <div className='block-right'>
                    <div className='avatar-group'>
                      <div className='avatar'>
                        <img src={download1} alt='@a' />
                      </div>
                      <div className='avatar'>
                        <img src={download2} alt='@a' />
                      </div>
                    </div>
                  </div>
                </div>
              </MainLiListGroupItem>
              <MainLiListGroupItem className='list-group-item'>Vestibulum at eros</MainLiListGroupItem>
            </MainUlListGroup>
          </MainCard>
          <MainCard className='card'>
            <MainHeader className='card-header'>SELECTED FOR DEVELOPMENT 2</MainHeader>
            <MainUlListGroup className='list-group list-group-flush'>
              <MainLiListGroupItem className='list-group-item'>Cras justo odio</MainLiListGroupItem>
              <MainLiListGroupItem className='list-group-item'>Dapibus ac facilisis in</MainLiListGroupItem>
            </MainUlListGroup>
          </MainCard>
          <MainCard className='card'>
            <MainHeader className='card-header'>IN PROGRESS 2</MainHeader>
            <MainUlListGroup className='list-group list-group-flush'>
              <MainLiListGroupItem className='list-group-item'>Cras justo odio</MainLiListGroupItem>
              <MainLiListGroupItem className='list-group-item'>Dapibus ac facilisis in</MainLiListGroupItem>
            </MainUlListGroup>
          </MainCard>
          <MainCard className='card'>
            <MainHeader className='card-header'>DONE 3</MainHeader>
            <MainUlListGroup className='list-group list-group-flush'>
              <MainLiListGroupItem className='list-group-item'>Cras justo odio</MainLiListGroupItem>
              <MainLiListGroupItem className='list-group-item'>Dapibus ac facilisis in</MainLiListGroupItem>
              <MainLiListGroupItem className='list-group-item'>Vestibulum at eros</MainLiListGroupItem>
            </MainUlListGroup>
          </MainCard>
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Main;
