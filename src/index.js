import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './assets/fonts/GL-KIROVI-BOLD.TTF';
import './assets/fonts/helvetica-neue-lt-geo-55-roman.ttf';
import './assets/fonts/helvetica-neue-lt-geo-65-medium.ttf';
import SimpleReactLightbox from 'simple-react-lightbox';



ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

