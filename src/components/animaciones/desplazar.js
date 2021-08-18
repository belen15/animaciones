import React from 'react';
import { motion } from 'framer-motion';
import './animaciones.css';

const Desplazar = () => {
  const desplazar = {
    fin: {
      x: 150,
      transition: {
        duration: 2,
        ease: 'easeIn',
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  }

  return (
    <motion.div
      className="caja"
      variants={desplazar}
      animate="fin" />
  )
}

export default Desplazar
