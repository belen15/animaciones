import React from 'react';
import { motion } from 'framer-motion';
import './animaciones.css';

const Rotacion = () => {
  const rotacion = {
    fin: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: 'easeIn',
        repeat: Infinity
      }
    }
  }
  return (
    <motion.div
      className="caja"
      variants={rotacion}
      animate="fin"/>
  )
}

export default Rotacion
