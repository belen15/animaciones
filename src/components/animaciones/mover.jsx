import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './animaciones.css';

const Mover = () => {
  const [IsAnimating, setIsAnimating] = useState(false)

  const mover = {
    
    fin: {
      transition: {
        stiffness: 45,
        type: 'spring',
      }
    }
  }
  return (
    <motion.div
      onClick={() => setIsAnimating(!IsAnimating)}
      whileHover={{scale : 1.2}}
      whileTap={{scale:0.7}}
      className="caja"
      variants={mover}
      drag
      dragConstraints={{
        left: -200,
        right:200,
        top: -200,
        bottom:30

      }}
      animate="fin" >Mover </motion.div>
  )
}

export default Mover