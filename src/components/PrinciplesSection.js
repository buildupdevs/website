/* eslint-disable react/no-danger */
import React from 'react';
import { PrinciplesStyles } from '../styles/PrinciplesStyles';

export default function PrinciplesSection({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;
  return (
    <PrinciplesStyles>
      <div className="principles">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </PrinciplesStyles>
  );
}
