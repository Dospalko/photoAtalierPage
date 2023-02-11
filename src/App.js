import React from 'react';

// import components
import Hero from './components/Hero';
import NewItems from './components/NewItems'
import Footer from './components/Footer'
import Header from './components/Header';
import PriceList from './components/PriceList';
const App = () => {
  return <div className='bg-white w-full max-w-[1440px] mx-auto'>
    <Header/>
    <Hero/>
    <NewItems/>
    <PriceList/>
    <Footer/>
  </div>;
};

export default App;
