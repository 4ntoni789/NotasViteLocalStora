import { faBars, faFolder, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../css/header.css";
import Navegacion from './Navegacion';
import Buscador from './Buscador';
function Header(props) {
  return (
    <header className='contHeader'>
      <Navegacion />
      
    </header>
  );
}

export default Header;