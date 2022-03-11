import React from 'react';
import { Route } from 'react-router-dom';
import { PropsTemplate } from '@Models/Global.types';
import { Layout } from 'antd';
import Spinner from '@Components/Spinner/Spinner';
import { connector, PropsFromReducer } from '@Redux/connect';
import SideBar from '@Components/SideBar';
import Menu from '@Components/Menu';
import ModalSearch from '@Components/ModalSearch';
import ModalInfo from '@Components/ModalInfo';
import styled from 'styled-components/macro';

export const CyberContainer = styled.div`
  height: 100vh;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  display: flex;
`;

const CyberTemPlates = (props: PropsTemplate & PropsFromReducer) => {
  const { Component, loadDingState, ...resRoute } = props;
  return (
    <Route
      {...resRoute}
      render={(propsRoute) => {
        return (
          <>
            {loadDingState.loading ? <Spinner /> : null}
            <CyberContainer>
              <SideBar />
              <Menu />
              <Component {...propsRoute} />
              <ModalSearch />
              <ModalInfo />
            </CyberContainer>
          </>
        );
      }}
    />
  );
};

export default connector(CyberTemPlates);
