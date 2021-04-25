import React from 'react';
import Head from 'next/head';

import LastfmLogo from 'assets/lastfm_logo.svg';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Homepage</title>
    </Head>

    <main>
      <LastfmLogo />
      <h1>Hello World</h1>
    </main>
  </div>
);

export default Home;
