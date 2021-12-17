import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Layout {...props}>{element}</Layout>;
}
