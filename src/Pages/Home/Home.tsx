import React from 'react';
import { PropsPage } from '@Models/Global.types';
import Header from '@Layouts/Header';
import { PropsFromReducer, connector } from '@Redux/connect';
const Home = (props: PropsPage & PropsFromReducer) => {
  const userLogin = props.userState.user;
  return (
    <div>
      <Header />
      Home
      {userLogin.name}
      <img src={userLogin.avatar} alt='' />
    </div>
  );
};

export default connector(Home);
