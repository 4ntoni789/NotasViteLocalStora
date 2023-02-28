import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGear, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import "../css/navegacion.css";
function Navegacion(props) {
  return (
    <nav className='contNav'>
      <NavLink className={({ isActive }) => (isActive ? "contNav__link active" : "contNav__link")} to="/"><FontAwesomeIcon icon={faBook}/></NavLink>
      <NavLink className="contNav__link" to="recordatorio"><FontAwesomeIcon icon={faSquareCheck}/></NavLink>
      <NavLink className="contNav__link" to="options"><FontAwesomeIcon icon={faGear}/></NavLink>
    </nav>
  );
}

export default Navegacion;