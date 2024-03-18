import React from "react";
// import { icons } from 'react-icons'
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion'
import { BiRightArrowCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <motion.div 
        
        initial={{y:"2rem", opacity:0}}
              animate={{y:0 , opacity:1}}
              transition ={{
                duration:3,
                type:"spring",
              }

              }
        
        className="flexColStart hero-left">
          <div className="hero-title">
            {/* <div className="orange-circle" /> */}
           
            <motion.h1
              initial={{y:"2rem", opacity:0}}
              animate={{y:0 , opacity:1}}
              transition ={{
                duration:3,
                type:"spring",
              }

              }
              >
               Put   
             The World
              <br /> On Mute 
            </motion.h1>
          </div>

          <div className="flexColStart secondaryText hero-des">
            <span>Your soundtrack to life awaits. </span>
            <span> Plug in and play on.</span>
          </div>

          
            
           <div className="btn">

            <button className="flexCenter buton">Shop Now
            <BiRightArrowCircle size={30}/></button>
           </div>
        

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={4000} end={9810} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5000} end={6010} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={490} end={800} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText"> Awards</span>
            </div>
          </div>
        </motion.div>
        <div className="orange-circle1" />
        <div className="flexCenter hero-right">
          <motion.div 
          
          initial={{x:"7rem", opacity:0}}
          animate={{x:0 , opacity:1}}
          transition ={{
            duration:2,
            type:"spring",
          }

          }>
          <div className="imag"
          >
            <div className="white-gradient" />
            <img src="./hero-image.png" alt="property" />
            
         </div> 
         </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
