import React from 'react'
import { motion } from "framer-motion";
import './navegador.css'
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
  }
}
}


const Navigation = (i) => {

  return (
    <motion.ul variants={variants} >
      <motion.li variants={variants}>hola</motion.li>
      <motion.li variants={variants}>hola</motion.li>
      <motion.li variants={variants}>hola</motion.li>
      <motion.li variants={variants}>hola</motion.li>

      
    </motion.ul>
    
  )
}

export default Navigation
