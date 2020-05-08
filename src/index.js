import ReactDOM from  'react-dom';
import React from 'react';
import App from './App.js';

import 'bootstrap/dist/js/bootstrap.min.js';  // import from bootstrap for nav bar menus functions 
import './index.scss';
//const h2Element = React.createElement('h2',null,'What a Nice Day!');
// const element = React.createElement('h1',{className:'title'}, 'Hello Vishnu!',h2Element);

// --------------- this imports from npm is for font awesome (icon for asset or facilities)
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);
//-----------------------------------------


const rootElement =document.getElementById('root');
ReactDOM.render(<App/>,rootElement);


