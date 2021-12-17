/* eslint-disable react/no-danger */
import { graphql } from 'gatsby';
import React from 'react';
import SEO from '../components/SEO';
import { ContentStyles } from '../styles/ContentStyles';

export default function AboutPage({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;
  return (
    <ContentStyles>
      <SEO title="Story" />
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ContentStyles>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Story" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
