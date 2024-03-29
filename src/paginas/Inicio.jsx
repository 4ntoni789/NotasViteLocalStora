import Buscador from '../componentes/Buscador';
import React, { useEffect, useState } from 'react';
import { faBars, faFolder, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../css/inicio.css";
import TareaItem from "../componentes/TareaItem.jsx";
import BtnNuevo from "../componentes/BtnNuevo.jsx";
import TareaAgregadaMod from '../componentes/TareaAgregadaMod';

function Inicio(props) {
  let obtenerItem;
  const [validarMostrarTarea, setValidarMostrarTarea] = useState(false);
  const [mostrarTareaModi, setMostrarTareaMod] = useState(false);
  let almacenTareas;
  const verTareasMap = () => {
    if (localStorage.getItem("Tarea") == null) {
      almacenTareas = [];
    } else {
      almacenTareas = JSON.parse(localStorage.getItem("Tarea"));
    }
  }
  verTareasMap()
  useEffect(() => {
    setValidarMostrarTarea(false);
  }, [validarMostrarTarea]);

  return (
    <div className='contInicio'>
      <Buscador />
      <BtnNuevo mostrarTare={() => { setValidarMostrarTarea(true) }}/>
      <div className='contInicio__contItem'>
      {
        almacenTareas.map((t, i) => {
          if (validarMostrarTarea == true || validarMostrarTarea == false) {
            return <TareaItem key={i} tituloTarea={t.tituloTarea} tarea={t.tarea} fecha={t.fecha}
              removeVal={() => { setValidarMostrarTarea(true) }}
              validarMostrarTareaMod={()=>setMostrarTareaMod(true)}
            />
          }
        })
      }
      </div>
      <TareaAgregadaMod 
      validar={mostrarTareaModi} 
      close={()=>setMostrarTareaMod(false)}
      validarCloseTareaMod={()=>setMostrarTareaMod(false)}
      /> 
    </div>
  );
}

export default Inicio;