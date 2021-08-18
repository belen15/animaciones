import React, {useState} from 'react';
import { motion } from 'framer-motion';
import './animaciones.css';

const Keyframe = () => {
  const [IsAnimating, setIsAnimating] = useState(false)
  const redondear = {
    inicio:{
      borderRadius:"20%"
    },
    visible: {
      scale: IsAnimating ? [1,1.4,1.4,1,1] : [],
      borderRadius: IsAnimating ? ["20%", "20%", "50%", "50%", "20%"] : [],
      rotate: IsAnimating ? [0,0,270,270,0] : [],
      transition: {
        duration: 3
      }
     }
  }


  return (
    <motion.div
      onClick={() => setIsAnimating(!IsAnimating)}
      className="caja"
      initial="inicio"
      animate="visible"
      variants={redondear}
    >
      
      
    </motion.div>
  )

}

export default Keyframe
