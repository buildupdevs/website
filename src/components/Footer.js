import React from 'react';
import { FooterStyles } from '../styles/FooterStyles';

export default function Footer() {
  return (
    <FooterStyles>
      <p>&copy; {new Date().getFullYear()} BuildUpDevs</p>
    </FooterStyles>
  );
}
