import { faL, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import "../css/buscador.css";
import BuscadorItem from './BuscadorItem';
function Buscador(props) {
  const [activarBuscador, setActivarBuscador] = useState(false);
  const [activarBtnEliminarca, setActivarBtnEliminarca] = useState(false);
  const [activarItemsBuscador, setActivarItemsBuscador] = useState(false);
  const itemsLocalSto = JSON.parse(localStorage.getItem("Tarea"));
  let objetosBusqueda = [];
  let objetosBusquedaMap = [];

  window.addEventListener("click", e => {
    if (e.target == document.querySelector(".contInput__inp") || e.target == document.querySelector(".contInput__icoEliminarCa__active")) {
      setActivarBuscador(true);
    } else {
      setActivarBuscador(false);
      setActivarBtnEliminarca(false);
      setActivarItemsBuscador(false);
    }
  });

  if (localStorage.getItem("buscadorItems")) {
    objetosBusquedaMap = JSON.parse(localStorage.getItem("buscadorItems"));
  }else{
    objetosBusquedaMap = [];
  }

  const VerValue = (e) => {
    if (e.target.value.length > 0 && activarBuscador == true) {
      setActivarBtnEliminarca(true);
    } else {
      setActivarBtnEliminarca(false);
      setActivarItemsBuscador(false);
      localStorage.removeItem("buscadorItems");
    }
  }

  const EliminarValue = (e) => {
    e.target.parentElement.children[0].value = null;
  }


  const MostrarElementosEncontrados = (e) => {
    itemsLocalSto.map((t) => {
      for (let i = 0; i < t.tituloTarea.length; i++) {
        if (e.target.value == t.tituloTarea[i]) {
          setActivarItemsBuscador(true);
          objetosBusqueda.push(t);
          localStorage.setItem("buscadorItems", JSON.stringify(objetosBusqueda));
        }
      }
    });
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
      {activarItemsBuscador?
      <div className='contInput__itemsBuscador'>
        {objetosBusquedaMap.map((t,i) => {
            return <BuscadorItem key={i} titulo={t.tituloTarea} tarea={t.tarea} fecha={t.fecha} />
          })}
      </div>
      : null
      }
    </div>
  );
}

export default Buscador;