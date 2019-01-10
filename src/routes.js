import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './pages/home'),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableGallery = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './pages/gallery'),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './pages/about'),
  loading() {
    return <div>Loading...</div>;
  }
});

export default function Routes() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/gallery" component={LoadableGallery} />
        <Route path="/about" component={LoadableAbout} />
      </Switch>
    </div>
  );
}
