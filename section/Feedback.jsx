'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={` ${styles.paddings}  relative z-10`}>

    <motion.div variants={staggerContainer}
      whileInView="show"
      initial="hidden"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}

    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05
      sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
<<<<<<< HEAD
        <div className="feedback-gradient" />
        <div className="mt-[40px]">
          <h4 className="font-bold sm:text-[32px] text-[26px]
          sm:leading-[40px] leading-[36px] text-white"
=======
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 3)}
          className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative '
        >
          <div 
            className='feedback-gradient popUpAnimation'
          />
          <div>
            <h4 className='font-bold sm:text-[32px] tex-[26px] sm:leading-[40px] leading-[36px] text-white'>Nitesh Marwaha</h4>
            <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>Founder | Metaverse</p>
          </div>
          <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>"With the development of today's technology, metaverse is going to be a stepping stone into the world for VR and AR."</p>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='relative flex-1 flex justify-center items-center'
        >
          <img src="/planet-09.png" alt="planet-09" className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'/>
          <motion.div
            variants={zoomIn(0.4, 1)}
            className='lg:block hidden absolute -left-[10%] top-[3%]'
>>>>>>> 0c96ba60fc1f8edb4972d05ec3a48a260dbb44c6
          >
            Samantha
          </h4>
          <p className="mt-[8px] flex-1 font-normal sm:text-[18px] text-[12px]
          sm:leading-[22px] leading-[16px] text-white"
          >
            Founder | Metaversus
          </p>
        </div>
        <p className="mt-[40px] text-secondary-white text-[16px] leading-[30px]">“With the development of today's technology, metaverse is very useful for today's work,
          or can be called web 3.0. by using metaverse you can use it as anything”
        </p>
        <motion.img variants={zoomIn(0.4, 1)} src="stamp.png" alt="stamp" className="lg:block absolute  w-[140px] h-[140px] z-10 lg:top-5  lg:-right-[30%] -bottom-[30%] " />

      </motion.div>
      <motion.div  variants={fadeIn('left', 'tween', 0.2, 1)} >
        <img src="planet-09.png" className="rounded-[34px] w-full h-auto lg:h-[610px] object-cover " />
      </motion.div>

    </motion.div>
  </section>
);

export default Feedback;
