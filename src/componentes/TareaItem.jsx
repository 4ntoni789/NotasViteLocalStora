import { faArrowDownUpLock, faArrowTurnDown, faBookBible, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../css/tareaItem.css";
import AgregarTarea from './AgregarTarea';

function TareaItem(props) {
  const [touchTarea, setTouchTarea] = useState(false);
  const [touchTareaRemove, setTouchTareaRemove] = useState(false);
  const MostrarBotones = () => {
    touchTarea == false ? setTouchTarea(true) : setTouchTarea(false);
  }
  const EliminarTarea = (e) => {
    const elemento = e.target.parentElement.children[0].textContent;
    setTouchTareaRemove(true);
    let almacenamientoTareas = JSON.parse(localStorage.getItem("Tarea"));
    const newElements = almacenamientoTareas.filter((t) => {
      return t.tituloTarea !== elemento;
    });
    localStorage.setItem("Tarea", JSON.stringify(newElements));
  }

  return (
    <div className={touchTarea == true ? "contTareaItem__active" : `contTareaItem ${touchTareaRemove ? "contTareaItem__remove" : ""}`} onClick={() => MostrarBotones()}>
      <h3 className='contTareaItem__tituloTarea'>{props.tituloTarea}</h3>
      <p className='contTareaItem__tarea'>{props.tarea}</p>
      <p className='contTareaItem__fecha'>{props.fecha}</p>
      <div className={touchTarea == true ? "contTareaItem__btnBorrar__active" : "contTareaItem__btnBorrar"} onClick={(e) => {
        EliminarTarea(e);
        () => props.removeVal()
      }}>
        x
      </div>
      <div className={touchTarea == true ? "contTareaItem__btnAbrir__active" : "contTareaItem__btnAbrir"} onClick={() => props.validarMostrarTareaMod()}>
        M
      </div>
    </div>
  );
}

export default TareaItem;
