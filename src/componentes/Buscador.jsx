import { faL, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import "../css/buscador.css";
function Buscador(props) {
  const [activarBuscador, setActivarBuscador] = useState(false);
  const [activarBtnEliminarca, setActivarBtnEliminarca] = useState(false);
  window.addEventListener("click", e => {
    if (e.target == document.querySelector(".contInput__inp") || e.target == document.querySelector(".contInput__icoEliminarCa__active")) {
      setActivarBuscador(true);
    } else {
      setActivarBuscador(false);
      setActivarBtnEliminarca(false);
    }
  });
  const VerValue = (e) => {
    if (e.target.value.length > 0 && activarBuscador == true) {
      setActivarBtnEliminarca(true)
    } else {
      setActivarBtnEliminarca(false)
    }
  }
  const EliminarValue = (e) => {
    e.target.parentElement.children[0].value = null;
  }
  const MostrarElementosEncontrados = (e) => {
    const tareasLocalSto = JSON.parse(localStorage.getItem("Tarea"));
    // const palabra = "Hola mundo";
    // for (let i = 0; i < palabra.length; i++) {
    //   console.log(palabra[i]);

    // }
    for (let i = 0; i < tareasLocalSto.length; i++) {
      let numeros = tareasLocalSto[i].tituloTarea.length;
      console.log(numeros);
      if (e.target.value == tareasLocalSto[0].tituloTarea[i]) {
      }

    }
    // tareasLocalSto.map((t,i)=>{
    //   console.log(t.tituloTarea,{i})
    // if(e.target.value == t.tituloTarea || e.target.value == t.tarea || e.target.value == t.fecha){
    //   console.log(t);
    // }
    // })
  }
  return (
    <div className={activarBuscador ? "contInput__active" : 'contInput'}>
      <input type="text" className='contInput__inp' placeholder='Buscar Notas'
        onClick={() => setActivarBuscador(true)}
        onChange={(e) => {
          VerValue(e);
          MostrarElementosEncontrados(e);
        }}
      />
      <div className={activarBtnEliminarca ? "contInput__icoEliminarCa__active" : "contInput__icoEliminarCa"}
        onClick={(e) => EliminarValue(e)}
      >
        X
      </div>
      <FontAwesomeIcon icon={faMagnifyingGlass}
        className={activarBuscador ? 'contInput__icoSeach__active' : 'contInput__icoSeach'} />
    </div>
  );
}

export default Buscador;