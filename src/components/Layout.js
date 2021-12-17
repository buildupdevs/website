import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';

const WrapperStyles = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: clamp(1.5rem, 2vw, 3rem);
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <WrapperStyles>
        <Nav />
        {children}
        <Footer />
      </WrapperStyles>
    </>
  );
}
