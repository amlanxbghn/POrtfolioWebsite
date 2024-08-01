import React from 'react';

function LandingPage() {
  return (
    <div data-scroll-section data-scroll-speed="-0.3" className='w-full h-screen bg-black pt-1'>
      <div className="textStructure mt-52 px-20">
        {["Hi There", "I'm Amlan", "Buragohain"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center">
                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tight font-["Sans-Serif"] font-medium'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32"></div>
    </div>
  );
}

export default LandingPage;
