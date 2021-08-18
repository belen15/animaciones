import React from 'react';
import { motion } from 'framer-motion';
import './navegador.css';
import Rotacion from './animaciones/rotacion';
import Desplazar from './animaciones/desplazar';
import Keyframe from './animaciones/keyframe';
import Giro from './animaciones/giro';
import Mover from './animaciones/mover';
import Lista from './animaciones/lista';
import Botones from './animaciones/botones';

const Motion = () => {
  
  return (
    <div>
      <Rotacion/>
      <hr/>
      <Giro/>
      <hr/>
     <Desplazar/>
     <hr/>
     <Mover/>
     <hr/>
     <Keyframe/>
     <hr/>
     <Lista/>
     <hr/>
     <Botones/>
      
      
    </div>
  )
}

export default Motion
