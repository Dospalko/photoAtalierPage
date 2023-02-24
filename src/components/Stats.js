import React from "react";

import { stats } from "../data";

const Stats = () => {
  return (
    <div className="bg-[#5290a8] rounded-[20px] p-12">
      <div className="flex flex-wrap gap-y-8 ">
        {stats.map((item, index) => {
          return (
            <div className="min-h-[70px] w-3/6 flex flex-col 
            justify-center odd:border-r lg:flex-1  lg:even:border-r lg:even:last:border-none" key={index}>
           
              <div className="text-base lg:text-xl font-semibold  max-w-[110px] mx-auto">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
