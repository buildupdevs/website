import { Link } from 'gatsby';
import React from 'react';

export default function NotFound() {
  return (
    <>
      <h2>404</h2>
      <p>You can't have everything</p>
      <Link to="/" className="back">
        ← Back Home
      </Link>
    </>
  );
}
