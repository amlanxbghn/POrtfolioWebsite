import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl bg-[#2185D5]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }} 
          className='flex'>
          <h1 className='text-[12vw] leading-none font-["Sans-Serif"] uppercase mt-10 mb-10 font-semibold'>Software Engineer</h1>
          <h1 className='text-[12vw] leading-none font-["Sans-Serif"] uppercase mt-10 mb-10 font-semibold'>Software Engineer</h1>
          <h1 className='text-[12vw] leading-none font-["Sans-Serif"] uppercase mt-10 mb-10 font-semibold'>Software Engineer</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
