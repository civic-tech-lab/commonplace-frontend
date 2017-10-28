// @flow
import React from 'react';
import styled from 'styled-components';

import { Header, Footer, Sidebar } from '../';

const Wrapper = styled.div`background-color: beige;`;

const Main = () => (
  <Wrapper>
    <Header />
    Main goes here
    <Sidebar />
    <Footer />
  </Wrapper>
);

export default Main;
