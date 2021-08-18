import { motion , useCycle} from 'framer-motion'
import React from 'react'
import './navegador.css'
import Menu from "./menu.js";
import Navigation from './navigation.js'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const Navegador = () => {
  

  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      initial={true}
      animate = { isOpen? "open": "closed" }
    >
      <motion.div className="navegador" variants={sidebar}>
        <Navigation />
      </motion.div>
      
      <Menu toggle={() => toggleOpen()} />


    </motion.nav>
      
    
  )
}

export default Navegador
