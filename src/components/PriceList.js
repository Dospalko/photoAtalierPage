import React from "react";

const PriceList = () => {
  return (
    <section className=" bg-[#0c4a6e] bg-opacity-15 container mx-auto pb-20 mb-10 overflow-hidden ">
      <div className="flex flex-col text-white items-center ">
        <div className="mb-2 mt-12 text-center">
          <h1 className="mb-4 text-7xl font-semibold">Cennik</h1>
          <p className=" text-lg">
            Vyberte si spravny balicek pre vas!
          </p>
        </div>
        <div className="border-2">
          <div className="flex text-xl bor font-semibold flex-col gap-8 p-10 xl:flex-row">
            <div className="">10 fotiek - 10$</div>
            <div className="text-white">30 Fotiek - 10$</div>
            <div className="text-white">50 Fotiek - 10$</div>
          </div>
        
          <div className="flex text-xl font-semibold flex-col gap-8 p-10 pt-0 xl:flex-row">
            <div className="text-white">10 fotiek - 10$</div>
            <div className="text-white">30 Fotiek - 10$</div>
            <div className="text-white">50 Fotiek - 10$</div>
          </div>
          <div className="flex text-xl font-semibold flex-col gap-8 p-10 pt-0 xl:flex-row">
            <div className="text-white">10 fotiek - 10$</div>
            <div className="text-white">30 Fotiek - 10$</div>
            <div className="text-white">50 Fotiek - 10$</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
