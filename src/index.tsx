import * as React from 'react';
import * as ReactDOM from 'react-dom';
import initAboutMe from './about-me';

initAboutMe();

ReactDOM.render(
  <h1>Hello, react-world!</h1>,
  document.getElementById('repos')
);