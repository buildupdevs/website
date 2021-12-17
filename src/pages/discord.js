/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import { DiscordStyles } from '../styles/DiscordStyles';

export default function DiscordPage({ data }) {
  const {
    markdownRemark: {
      frontmatter: { title },
      html,
    },
  } = data;
  return (
    <DiscordStyles>
      <SEO title="Discord" />
      <section className="intro">
        <h2>Discord</h2>
        <p>
          Before you join our discord server, be sure to read this code of
          conduct, properly. When you're finished reading, the link to join will
          appear.
        </p>
      </section>
      <section className="coc">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
      <a
        className="discord"
        target="_blank"
        href="https://discord.gg/mz2KYVU9"
        rel="noreferrer"
      >
        Join our Discord{' '}
        <span>
          By clicking this you're agreeing to abide by the code of conduct.
        </span>
      </a>
    </DiscordStyles>
  );
}

export const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { eq: "Code of Conduct" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
