import React, {useContext} from 'react';

import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

import { Link } from 'react-router-dom';

// import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
import { CursorContext } from '../context/CursorContext';


const Portfolio = () => {
  const{mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section       
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
      >

      <div className="container mx-auto h-full relative">
        <div className='flex flex-col lg:flex-row h-full items-center 
        justify-start gap-x-24 text-center 
        lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* {text} */}
          <motion.div 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start w-full lg:w-1/2'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12'>
              <b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />
              <br />
              <b>Lorem ipsum dolor sit amet,</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:max-0'>Hire Me</Link>
          </motion.div>

          {/* {img container} */}
          <div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className='grid grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-1/2'>
            {/* image 1 */}
            <div className='w-full h-auto bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500' src={Image1} alt='' />
            </div>
            {/* image 2 */}
            <div className='w-full h-auto bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500' src={Image2} alt='' />
            </div>
            {/* image 3 */}
            <div className='w-full h-auto bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500' src={Image3} alt='' />
            </div>
            {/* image 4 */}
            <div className='w-full h-auto bg-accent overflow-hidden'>
              <img className='object-cover w-full h-full hover:scale-110 transition-all duration-500' src={Image4} alt='' />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
