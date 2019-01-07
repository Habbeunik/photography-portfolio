import React from 'react';
import Helmet from 'react-helmet';

import * as metadata from './metadata';
import Routes from './routes';

const App = () => (
  <div className="app">
    <Helmet
      title={metadata.title}
      meta={metadata.meta}
      link={metadata.link}
      script={metadata.script}
      noscript={metadata.noscript}
    />
    <Routes />
    <footer />
  </div>
);

export default App;
