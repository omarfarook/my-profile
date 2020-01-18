import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../components/nav-bar';
import MobileNav from '../components/mobile-nav';
import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MobileNav />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
