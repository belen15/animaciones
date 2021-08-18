import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './animaciones.css';

const prueba = [1,2,3]

const Lista = () => {

  const lista = {
    inicial:{
      x:-1000
    },
    fin: {
      x:0,
      transition: {
        delay: 0.5,
        when:'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const items = {
    inicial: {
      opacity: 0,
      x: -10
    },
    fin: {
      opacity:1,
      x: 0
    }
  }
  
  return (
    <motion.div
      className="caja"
      variants={lista}
      initial="inicial"
      animate="fin" >
        {prueba.map((box, index) => {
          return(
            <motion.li 
            key={index}
              className="items"
              variants={items}
              >{index}
            </motion.li>)
        })}
        
    </motion.div>
  )
}

export default Lista