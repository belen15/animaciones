import React, {useState} from 'react';
import { motion } from 'framer-motion';
import './animaciones.css';

const Giro = () => {
  const [IsAnimating, setIsAnimating] = useState(false)

  const giro = {
    inicio: {
      opacity: 0.3
    },
    fin: {
      opacity: IsAnimating ? 1 : 0.3,
      rotate: IsAnimating ? 360 : 0,
      x: IsAnimating ? '40vw' : 0,
      transition: {
        stiffness: 45, 
        type: 'spring',
      }
    }
  }
  return (
    <motion.div
      onClick={()=> setIsAnimating(!IsAnimating)}
      className="caja"
      variants={giro}
      initial="inicio"
      animate="fin" >Animacion </motion.div>
  )
}

export default Giro