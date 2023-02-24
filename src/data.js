// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
  IoMdMailOpen,
  IoIosMicrophone,
  IoIosHome,
  IoIosContact,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.jpg';
import Product2Img from './assets/img/products/product-2.jpg';
import Product3Img from './assets/img/products/stolicka.jpg';
import Product4Img from './assets/img/products/stolicka3.jpg';
import Product5Img from './assets/img/products/vrtacka.jpg';
import Product6Img from './assets/img/products/hodiny.jpg';
import Product7Img from './assets/img/products/hrncek.jpg';
import Product8Img from './assets/img/products/notebook1.jpg';
import Product9Img from './assets/img/products/notebook2.jpg';
import Product10Img from './assets/img/products/pilka1.jpg';


export const navigation = [
  {
    name: 'domov',
    href: 'domov',
  },
  {
    name: 'O nas',
    href: 'about',
  },
  {
    name: 'galeria',
    href: 'features',
  },
  {
    name: 'kontakt',
    href: '#contact',
  },
];

export const hero = {
  title: 'Ponúkame kvalitné 2D fotografie a 360° snímky pre vaše web stránky',

};

export const stats = [
  {
    
    text: 'Produktove fotografie',
  },
  {
   
    text: 'Rychle dodanie',
  },
  {
   
    text: 'Kvalitna praca',
  },
 
];



export const newInStore = {
  title: 'Najnovsie fotografie',
  subtitle: 'Pridte sa odfotit uz dnes so zlavou.',
  link: 'Cela galeria',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'chair',
      image: <ChairImg />,
    },
    {
      name: 'bed',
      image: <BedImg />,
    },
    {
      name: 'cupboard',
      image: <CupboardImg />,
    },
    {
      name: 'lighting',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'Galéria',
  subtitle:
    'Menší výber produktov ktoré sme nafotili',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Notebook',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Pohár',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Stolička',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Stolička',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Vŕtačka',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Hodiny',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Hrnček',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Notebook',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Notebook',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Vŕtačka',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Notebook',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Pohár',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Stolička',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Stolička',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Vŕtačka',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Hodiny',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Hrnček',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Notebook',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Notebook',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Vŕtačka',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};





export const footer = {
  social: [
    {
      icon: <IoMdMailOpen />,
      href: '#',
    },
    {
      icon: <IoIosContact />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoIosHome/>,
      href: '#',
    },
  ],
  copyright: 'Photo atalier 2023 DevminikCo.',
};
