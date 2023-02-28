import { faArrowAltCircleLeft, faBars, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../css/btnBuevo.css";
import AgregarTarea from './AgregarTarea';
function BtnNuevo(props, { argun }) {

  const [agregarTarea, setAgregarTarea] = useState(false);
  const NuevoElemento = () => {
    agregarTarea == false ? setAgregarTarea(true) : setAgregarTarea(false);
  }

  return (
    <>
      <button className="contBtnPlus" onClick={() => NuevoElemento()}>{
        agregarTarea == false ? <FontAwesomeIcon className='contBtnPlus__ico' icon={faPlus} /> :
          <FontAwesomeIcon className='contBtnPlus__ico' icon={faArrowAltCircleLeft} />
      }
      </button>
      <AgregarTarea validar={agregarTarea || props.mostrarTareaMod} iconoTareaMod={props.mostrarTareaMod}
        close={() => NuevoElemento()}
        mostrarTa={() => props.mostrarTare()}
        />
    </>
  );
}

export default BtnNuevo;