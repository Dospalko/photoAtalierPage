import React from "react";

const PriceList = () => {
  return (
    <section className=" bg-[hsl(200,58%,18%)] bg-opacity-15 container mx-auto pb-20 mb-10 overflow-hidden ">
      <div className="flex flex-col text-white justify-between ">
        <div className="mb-2 mt-12 text-center">
          <h1 className="mb-4 text-7xl font-semibold">Cennik</h1>
        </div>
        <div class="flex flex-row justify-around">
          <div className="border-2 p-4">
            <div>
              <h2 className="text-2xl border-b-2 font-semibold">
                2D Fotografie
              </h2>
            </div>
            <div className="flex-col font-thin my-4 mx-auto text-2xl">
              <p className="my-3">Balík 1 fotky 5€ </p>{" "}
              <p className="my-3">Balík 2 fotiek 7€ </p>{" "}
              <p className="my-3">Balík 3 fotiek 10€ </p>{" "}
              <p className="my-3">Balík 4 fotiek 12.50€ </p>
            </div>
          </div>

          <div className="border-2 p-4">
            <div>
              <h2 className="text-2xl border-b-2 font-semibold">360° snímky</h2>
            </div>
            <div className="flex-col font-thin mx-auto text-2xl">
              <p className="my-3">Z 16 fotiek 15€</p>{" "}
              <p className="my-3">Z 32 fotiek 18€</p>{" "}
              <p className="my-3">Z 64 fotiek 20€</p>{" "}
     
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
