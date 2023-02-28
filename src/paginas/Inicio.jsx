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
      {/* <div className='contInicio__BntTodos'>
        <div className='contInicio__BntTodos__todos'>
          <h4>Todos</h4>
        </div>
        <div className='contInicio__BntTodos__todos'>
          <FontAwesomeIcon className='contInicio__BntTodos__todos__ico' icon={faFolder} />
        </div>
      </div> */}
      <BtnNuevo mostrarTare={() => { setValidarMostrarTarea(true) }}/>
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
      <TareaAgregadaMod 
      validar={mostrarTareaModi} 
      close={()=>setMostrarTareaMod(false)}
      validarCloseTareaMod={()=>setMostrarTareaMod(false)}
      /> 
    </div>
  );
}

export default Inicio;