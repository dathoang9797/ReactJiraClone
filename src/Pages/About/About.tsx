import React from 'react';
import { PropsPage } from '@Models/Global.types';
import Header from '@Layouts/Header';
const About = (props: PropsPage) => {
  console.log('🚀 ~ file: About.tsx ~ line 5 ~ About ~ props', props);

  return (
    <div>
      <Header />
      About
    </div>
  );
};

export default About;
