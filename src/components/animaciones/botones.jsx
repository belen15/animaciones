import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './animaciones.css';

const Botones = () => {
  const control = useAnimation()  

  return (
    <div className="contenedor-btn">
      <div>      
        <button  onClick={() => {
          control.start({
            x:250,
            transition: {duration:2}
          })
        }}
          className="btn"
         >Left</button>
        <button className="btn" onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 }
          })
        }}>Right</button>
        <button className="btn" onClick={() => {
          control.start({
            borderRadius:"50%",
            transition: { duration: 1 }
          })
        }}>Circle</button>
        <button className="btn" onClick={() => {
          control.start({
            borderRadius: "0%",
            transition: { duration: 1 }
          })
        }}>Square</button>
        <button className="btn" onClick={() => {
          control.stop() }}
        >Stop</button>
    
      </div>
      <motion.div className="caja"
        animate={control}
       ></motion.div>

    </div>
  )
}

export default Botones