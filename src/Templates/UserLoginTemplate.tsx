import React from 'react';
import { Route } from 'react-router-dom';
import { PropsTemplate } from '@Models/Global.types';
import { Layout } from 'antd';
import { connector, PropsFromReducer } from '@Redux/connect';
import Spinner from '@Components/Spinner';
const { Content } = Layout;

const UserLoginTemplate = (props: PropsTemplate & PropsFromReducer) => {
  const { Component, loadDingState, ...resRoute } = props;
  return (
    <Route
      {...resRoute}
      render={(propsRoute) => {
        return (
          <>
            {loadDingState.loading ? <Spinner /> : null}
            <Layout>
              <Content className='position-relative'>
                <Component {...propsRoute} />
              </Content>
            </Layout>
          </>
        );
      }}
    />
  );
};

export default connector(UserLoginTemplate);
