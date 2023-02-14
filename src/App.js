import React from 'react';

// import components
import Hero from './components/Hero';
import NewItems from './components/NewItems'
import Footer from './components/Footer'
import Header from './components/Header';
import PriceList from './components/PriceList';
import Products from './components/Product';
const App = () => {
  return <div className='bg-white w-full font-bold max-w-[1440px] mx-auto'>
    <Header/>
    <Hero/>
    <NewItems/>
    <PriceList/>
    <Products/>
    <Footer/>
  </div>;
};

export default App;
