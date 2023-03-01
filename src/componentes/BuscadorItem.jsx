import React from 'react';
import "../css/buscadorItem.css";

function BuscadorItem(props) {
  return (
    <div className='buscadorItem'>
      <h3 className='buscadorItem__itemTitulo'>{props.titulo}</h3>
      <p className='buscadorItem__tarea'>{props.tarea}</p>
      <p className='buscadorItem__fecha'>{props.fecha}</p>
    </div>
  );
}

export default BuscadorItem;