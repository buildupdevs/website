import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { NavStyles } from '../styles/NavStyles';

export default function Nav() {
  return (
    <NavStyles>
      <Link to="/">
        <StaticImage
          src="../assets/images/buildupdevs-logo.png"
          width={60}
          placeholder="none"
          quality={100}
          alt="BuildUpDevs Logo"
        />
      </Link>
      <ul>
        <li>
          <Link to="/principles">Principles</Link>
        </li>
        <li>
          <Link to="/story">Story</Link>
        </li>
        <li>
          <Link to="/discord">Discord</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
