# React Server Side Rendering Boilerplate ⚛️🎨

Tools like [create-react-app](https://github.com/facebook/create-react-app) have made setting up client-side React apps trivial, but transitioning to SSR is still kind of a pain in the ass. The [Razzle](https://github.com/jaredpalmer/razzle) tool looks like an absolute beast, but sometimes you just want to see the whole picture. This is a sample setup for full-featured, server-rendered React applications.

**What's included:**

- Server-side rendering with code splitting (via the excellent [React Loadable](https://github.com/thejameskyle/react-loadable) package)
- Redux (with server-side data fetching/store population)
- React Router v4
- Conditionally load pollyfills -- only ship bloat to outdated browsers
- React Helmet for dynamic manipulation of the document `<head />`
- Dev server with hot-reloading
- Jest and Enzyme config ready to test the crap out of some stuff
- CSS Modules, Sass, and autoprefixer
- Run-time environment variables
- Node.js clusters for improved performance under load (in production)
- Prettier and ESLint run on commit
- Docker-ized for production like a bawsss

## Initial setup

- `npm install`

## Development

- `npm run dev`
  - Start the dev server at [http://localhost:3000](http://localhost:3000)
- `npm test`
  - Start `jest` in watch mode

## Production

- `npm run build && npm start`
  - Bundle the JS and fire up the Express server for production
- `npm run docker`
  - Build and start a local Docker image in production mode (mostly useful for debugging)

## Current Quirks

- This app does **not** create a server bundle via webpack, only client-side bundles. That means some of the crazy things you can do with webpack (`import`ing images, for example) are not possible here without getting dirty.
- CSS modules are disabled for any files inside `src/styles` -- use this directory for global styles instead. This is configured in the webpack config files, so start there if you'd like to change anything.
- Routing configuration can potentially be _slightly_ duplicated. All routes should be defined in their normal React Router v4 fashion. However, any routes that need to have data fetched before rendering (on the server) need some extra configuration inside `sever/fetchDataForRender` (in the `ROUTES_THAT_FETCH_DATA` array).

## `cj-scripts`

If you're interested in creating your own [react-scripts](https://github.com/facebook/create-react-app/tree/next/packages/react-scripts)-eque CLI that wraps up some of the concepts in this project take a look at my [cj-scripts](https://github.com/cullenjett/cj-scripts) repo.
