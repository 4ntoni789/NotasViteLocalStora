import { faArrowAltCircleUp, faArrowCircleLeft, faArrowCircleRight, faArrowDownUpAcrossLine, faArrowUpFromBracket, faArrowUpLong, faArrowUpRightDots, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../css/agregarTarea.css";

function AgregarTarea(props) {
  const [countCaracteres, setCountCaracteres] = useState(0)
  let contTareasLocal;
  if (localStorage.getItem("Tarea") == null) {
    contTareasLocal = [];
  } else {
    contTareasLocal = JSON.parse(localStorage.getItem("Tarea"));
  }

  class Tarea {
    constructor(tituloTarea, tarea, fecha) {
      this.tituloTarea = tituloTarea,
        this.tarea = tarea,
        this.fecha = fecha;
    }
  }

  const fecha = new Date;
  const validarMes = () => {
    switch (fecha.getMonth()) {
      case 0: return "Enero";
      case 1: return "Febrero";
      case 2: return "Marzo";
      case 3: return "Abril";
      case 4: return "Mayo";
      case 5: return "Junio";
      case 6: return "Julio";
      case 7: return "Agosto";
      case 8: return "Septiembre";
      case 9: return "Octubre";
      case 11: return "Noviembre";
      case 12: return "Diciembre";
    }
  }
  const CalcularCaracteres = (e) => {
    setCountCaracteres(e.target.value.length);
  }
  const ObtenerInfo = (e) => {
    const inp = document.querySelector(".contModalAgregarTarea__imp");
    const textTa = document.querySelector(".contModalAgregarTarea__Texta")
    if (inp.value.length > 0) {
      contTareasLocal.push(new Tarea(inp.value, textTa.value, fecha.getDate() + " de " + validarMes(fecha.getMonth())));
      localStorage.setItem("Tarea", JSON.stringify(contTareasLocal));
      textTa.value = null;
      inp.value = null;
      setCountCaracteres(0);
      localStorage.setItem("validarMap", true);
    }
  }
  return (
    <div className={props.validar ? 'contModalAgregarTareaActive' : 'contModalAgregarTarea'}>
      <div className='contModalAgregarTarea__divBtnGuardar'>
        {props.iconoTareaMod ?
          <FontAwesomeIcon icon={faXmark} onClick={()=>props.validarCloseTareaMod()} /> :
          <FontAwesomeIcon className="contModalAgregarTarea__divBtnGuardar__ico" onClick={(e) => {
            ObtenerInfo(e);
            props.close();
            props.mostrarTa();
          }} icon={faArrowUpFromBracket} />}
      </div>
      <input type="text" className='contModalAgregarTarea__imp' placeholder='Titulo' />
      <div className='contModalAgregarTarea__fechaCreacion'>
        <h4>{fecha.getDate()} de {validarMes()} - {fecha.getFullYear()} - hora: {fecha.getHours()}:{fecha.getMinutes()} {"| "}
          {countCaracteres} caracteres
        </h4>
      </div>
      <textarea className='contModalAgregarTarea__Texta' onChange={(e) => CalcularCaracteres(e)} cols="30" rows="10" placeholder='Empiece a escribir'></textarea>
    </div>
  );
}

export default AgregarTarea;