import React from "react";
import { useState } from "react";

import './App.css';

const ItemCount = ({ onAdd, initial, stock}) => {
    //initial = 1; //el numero inicial de un contador, por sentido comun tiene que ser mayor o igual a 1
    //stock = 7; //Limita el count, pensando en el stock de un producto

    //hook de estado 
    const [qty, setQty] = useState(initial);

    //esta funcion recibe por parametro un numero que se sumara al valor inicial
    //del estado qty. de esta manera podremos sumar y restar con una misma funcion

    const addProduct = (num) => {
        setQty(qty + num);
    };

    return (
        <div className="count-container">
            <div className="count-container__contador">
                <button
                className="count-container__button"
                onClick={() => addProduct(-1)}
                ////disabled es una propiedad de los inputs y buttons en html, por defecto disabled tiene un valor booleano en true, sin embargo podemos aprovechar que en jsx podemos mezclar html y javascript para aplicar una operación lógica de comparación que devolverá un true si es que el valor inicial y la cantidad son la misma
          //Esto hará que no podamos seguir ejecutando la función para restar
            disabled={qty === initial}
            >

            </button>
            <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          //en este otro botón, aplico una operación lógica de comparación que devolverá true cuando la cantidad sea igual al stock, esto evitará que pueda seguir sumando. Esto es muy útil porque reduzco el costo computacional ya que evito directamente que se ejecute la función addProduct.
          disabled={qty === stock}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => {
          onAdd(qty);
        }}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;


        