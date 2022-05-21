import React from 'react';
import Head from 'next/head';
import Register from '../components/Signup/Register';

const signup = () => {
  return (
    <div>
      <Head>
        <title>Jettby | private rebuilt car sales</title>
        <meta name='description' content='register' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Register />
      </main>
    </div>
  );
};

export default signup;
