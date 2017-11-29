// @flow
import React from 'react';

import Wrapper from './Wrapper';
import { Header, Footer, Sidebar } from '../';

const Main = () => (
  <Wrapper>
    <Header />
    Main goes here
    <Sidebar />
    <Footer />
  </Wrapper>
);

export default Main;
