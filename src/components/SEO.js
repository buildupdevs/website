import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function SEO({ children, metadescription, title, image }) {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteURL
        }
      }
    }
  `);

  return (
    <Helmet
      titleTemplate={pathname === '/' ? '' : `%s - ${site.siteMetadata.title}`}
    >
      <html lang="en" />
      <title>{title || site.siteMetadata.title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content={metadescription || site.siteMetadata.description}
      />
      <meta
        property="og:url"
        content={`${site.siteMetadata.siteURL}${pathname || ''}`}
      />
      <meta
        property="og:image"
        content={image || `${site.siteMetadata.siteURL}/logo.png`}
      />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={site.siteMetadata.title} />
      <meta
        property="og:description"
        content={metadescription || site.siteMetadata.description}
      />
      {children}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}
