import React from 'react';

// import logo
import Logo from '../assets/img/logo.svg';

// import data
import { footer } from '../data';

const Footer = () => {
  return (
    <footer className='section h-[300px]  bg-primary text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <div className='flex flex-col'>
          <a className='mb-6 lg:mb-10 lg:text-3xl font-bold' id='contact'>
           Nafocime
          </a>
          <a className='mb-6 lg:mb-0 lg:text-xl font-bold'>
           Ochrana osobných údajov
          </a>
          <a className='mb-6 underline lg:mb-0 lg:text-xl font-bold'>
           Formulár k objednávke
          </a>
          </div>
        
          <div className='flex  gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div
                  className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition-all'
                  key={index}
                >
                  <a href='#'>{item.icon}</a>
                  
                </div>
              );
            })}
          </div>
        </div>
        <p className='text-center'>
          &copy; Photo Atalier 2023. Devminik Co.
        </p>
     
      </div>
    </footer>
  );
};

export default Footer;