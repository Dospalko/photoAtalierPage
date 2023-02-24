import React from 'react';


import {newInStore} from '../data';



const NewItems = () => {

  const {title,subtitle,link, icon} = newInStore;

  return <section className='section relative overflow-hidden lg:min-h-[540px] primary sans font-sans' id='about'>
  <div className='container mx-auto'>
  <h2 className='title flex text-center items-center justify-center   lg:mb-[40px]' >
          O nás
  </h2>
  <p className='md:text-justify mb-10 text-2xl leading-10'>
  Sme profesionálne fotoštúdio so skúsenými  fotografmi ktorý Vám vedia ponúknuť kvalitné produktové fotografie na vaše web stránky s bielym pozadím.
  </p>
  <h2 className='title flex text-center items-center justify-center   lg:mb-[40px]' >
          Info
  </h2>
    <div className='flex flex-col lg:flex-row'>
   
      {/* text */}
      <div className='flex flex-col flex-wrap text-2xl leading-10 md:text-justify text-left   gap-x-6 mb-6 lg:mb-0'>
       
        <p className=' lg:mb-12'>
        Zameriavame sa na vytvorenie produktových  fotografii s bielym pozadím.  Máme k dispozícii grafikov ,ktorí Vám upravia pozadie podľa vašich predstáv. V prípade záujmu Vám zašleme formulár ohľadom vašich požiadaviek  ,ktorý zjednoduší našu spoluprácu. Po spracovaní  dotazníka, Vám odošleme e-mail v ktorom sa bude nachádzať adresa na odoslanie produktov.  Po uhradení  faktúry, ktorá Vám bude takisto zaslaná na e-mail následne produkty odošleme na Vami uvedenú adresu.
        </p>
        <p>
        Čakacia doba je priemerne 2 až 3 pracovné dni , od dodania produktu. Odvíja sa to od vyťaženia termínov ,počtu produktov či ich materiálu. Následne Vám bude zaslaný odkaz na úložisko, odkiaľ si fotografie stiahnete. Vieme fotografovať  sklo, plasty, keramiku  ale aj mnoho iných materiálov. Rozmery produktov ale aj ich počet či typ materiálu je dôležite uviesť vo formulári. Maximálna hmotnosť a rozmer produktu nesmie presahovať viac ako 25kg a 50x50x50cm. V prípade iných rozmerov nie je možne vykonať 360 snímok. Je potrebne nás oboznámiť s nadmernými veľkosťami vopred aby sme posúdili možnú realizáciu.
        </p>
        <h3 className='font-semibold my-10 text-3xl'>Ako fungujeme?</h3>
        <ul  className='list-disc ml-5 m-2'>
          
          <li>
          Kontaktujte nás
          </li>
          <li>
          Zašleme Vám formulár
          </li>
          <li>
          Spracujeme a následne pošleme spätný e-mail o potvrdení Vašej objednávky
          </li>
          <li>
          Po potvrdení Vám zašleme adresu na odoslanie produktov
          </li>
          <li>
          Po uhradení faktúry Vám budú produkty odoslané naspäť
          </li>
        </ul>
      </div>
   
     
    </div>
  </div>
</section>;
};

export default NewItems;
