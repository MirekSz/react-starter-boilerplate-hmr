import React from 'react';
import Form from './Form';

import Layout from './Layout';
let a = { b: 'mirek', c: { d: 'as' } }
let z = a ?.c ?.d || 'def';
console.log('z', z);;
const DynamicPage = () => {
  return (
    <Layout>
      <h2>Dynamic Page </h2>
      <p>This page was loaded asynchronously!!! </p>
      <Form />
    </Layout>
  );
};

export default DynamicPage;
