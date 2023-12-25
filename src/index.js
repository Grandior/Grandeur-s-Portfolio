import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
// import RotateImages from './Components/try';
import RotateImagesOutside from './Components/try';
import ContactForm from './Components/contact';
import Footer from './Components/Footer';
import ToggleDivs from './Components/Skills';
import Example from './Components/Progressbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Main />
    <ToggleDivs />
    {/* <Example /> */}
    <ContactForm />
    <Footer />
    
  </React.StrictMode>
);

reportWebVitals();
