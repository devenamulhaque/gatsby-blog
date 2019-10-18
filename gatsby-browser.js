import React from 'react';
import Layout from './src/pages/components/Layout';

export const wrapPageElement = ({ element, props }, options) => {
  return <Layout>{element}</Layout>;
};
