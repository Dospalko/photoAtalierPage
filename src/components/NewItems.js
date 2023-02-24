import React from 'react';


import {newInStore} from '../data';

import NewItemsSlider from './NewItemsSlider';

const NewItems = () => {

  const {title,subtitle,link, icon} = newInStore;

  return <section className='section relative overflow-hidden lg:min-h-[540px]'>
  <div className='container mx-auto'>
  <h2 className='title flex text-center items-center justify-center   lg:mb-[40px]'>
          Info
  </h2>
    <div className='flex flex-col lg:flex-row'>
   
      {/* text */}
      <div className='flex flex-row flex-wrap text-2xl leading-10 text-justify   gap-x-6 mb-6 lg:mb-0'>
       
        <p className=' lg:mb-12'>
        Zameriavame sa na vytvorenie produktových  fotografii s bielym pozadím.  Máme k dispozícii grafikov ,ktorí Vám upravia pozadie podľa vašich predstáv. V prípade záujmu Vám zašleme formulár ohľadom vašich požiadaviek  ,ktorý zjednoduší našu spoluprácu. Po spracovaní  dotazníka, Vám odošleme e-mail v ktorom sa bude nachádzať adresa na odoslanie produktov.  Po uhradení  faktúry, ktorá Vám bude takisto zaslaná na e-mail následne produkty odošleme na Vami uvedenú adresu.
        </p>
        <p>
        Čakacia doba je priemerne 2 až 3 pracovné dni , od dodania produktu. Odvíja sa to od vyťaženia termínov ,počtu produktov či ich materiálu. Následne Vám bude zaslaný odkaz na úložisko, odkiaľ si fotografie stiahnete. Vieme fotografovať  sklo, plasty, keramiku  ale aj mnoho iných materiálov. Rozmery produktov ale aj ich počet či typ materiálu je dôležite uviesť vo formulári. Maximálna hmotnosť a rozmer produktu nesmie presahovať viac ako 25kg a 50x50x50cm. V prípade iných rozmerov nie je možne vykonať 360 snímok. Je potrebne nás oboznámiť s nadmernými veľkosťami vopred aby sme posúdili možnú realizáciu.
        </p>
     
      </div>
   
     
    </div>
  </div>
</section>;
};

export default NewItems;
