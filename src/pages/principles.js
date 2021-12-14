/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import { PrinciplesStyles } from '../styles/PrinciplesStyles';
import SEO from '../components/SEO';

export default function Principles({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;

  return (
    <PrinciplesStyles>
      <SEO title="Principles" />
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </PrinciplesStyles>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Principles" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
