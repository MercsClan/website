import React from 'react';
import Header from './components/common/Header/Header';
import Navigation from './components/common/Navigation/Navigation';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Navigation />
        <img className="page-background-top" src="/images/bg-top.png" alt="" />
      </div>
    </>
  );
}

export default App;
