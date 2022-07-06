import React from 'react';
import '../styles/globals.css';

/**
 *
 * @param {Object} Component to be rendered
 * @param {Object} pageProps to be passed to the component
 * @return {Object} The render component
 */
function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: ElementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
