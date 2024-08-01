import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div className='w-full py-20 bg-[#FC4100]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 25}} 
          className='flex'>
          <h1 className='text-[12vw] leading-none font-["Inter"] uppercase mt-10 mb-10 font-semibold text-white'>Eat&nbsp;&#183;&nbsp;Sleep&nbsp;&#183;&nbsp;Code&nbsp;&#183;&nbsp;Repeat&nbsp;&#183;&nbsp;</h1>
          <h1 className='text-[12vw] leading-none font-["Inter"] uppercase mt-10 mb-10 font-semibold text-white'>Eat&nbsp;&#183;&nbsp;Sleep&nbsp;&#183;&nbsp;Code&nbsp;&#183;&nbsp;Repeat&nbsp;&#183;&nbsp;</h1>
          <h1 className='text-[12vw] leading-none font-["Inter"] uppercase mt-10 mb-10 font-semibold text-white'>Eat&nbsp;&#183;&nbsp;Sleep&nbsp;&#183;&nbsp;Code&nbsp;&#183;&nbsp;Repeat&nbsp;&#183;&nbsp;</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
