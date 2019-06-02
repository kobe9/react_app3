import React from 'react';

import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import Home from '../pages/Home';
import Counter from '../Counter';


function App() {

  return (
    <div className="app">
      <Header />
      <Home />
      <Counter />
      <Footer />
  
    </div>
  );
}

export default App;
