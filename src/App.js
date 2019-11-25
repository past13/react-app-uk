import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import './App.css';

import NavBar from './pages/NavBar';
import Main from './pages/Main';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
