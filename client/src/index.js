import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Formik} from 'formik'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Formik>
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>    */}
      <BrowserRouter>   
            <App />
        </BrowserRouter>
    </Formik>
  </React.StrictMode>
);