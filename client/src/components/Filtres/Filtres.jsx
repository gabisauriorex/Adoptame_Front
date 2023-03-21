import React, { useState } from "react";

/* import Pets from "../../components/CardsPets/Pets"; */

import {
  filterByBreed,
  filterByAnimal,
  filterBySize,
  filterByColor,
  filterByIdent,
} from "../../Redux/Actions/actions_filter";





export default function Filtres() {
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  function handlerFilterBreed(e) {
    setSelectedBreed(e.target.value);
    dispatch(filterByBreed(e.target.value));
  }

  function handlerFilterAnimal(e) {
    setSelectedAnimal(e.target.value);
    dispatch(filterByAnimal(e.target.value));
  }

  function handlerFilterSize(e) {
    e.preventDefault();
    const weight = Number(e.target.value.split(",")[0]);
    const height = Number(e.target.value.split(",")[1]);
    let size = "";
    if (weight < 5 && height < 10) {
      size = "Chico";
    } else if (weight >= 5 && weight < 10 && height >= 10 && height < 15) {
      size = "Mediano";
    } else if (weight >= 10 && height >= 15) {
      size = "Grande";
    }
    dispatch(filterBySize(size));
    setCurrentPage(1);
  }
  function handlerFilterColor(e) {
    e.preventDefault();
    dispatch(filterByColor(e.target.value));
    setCurrentPage(1);
  }
  function handlerFilterIdent(e) {
    e.preventDefault();
    dispatch(filterByIdent(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div>
      <h3>Filter</h3>
    
      <div /* className={style.filtercontainer} */>
        <div>
          <label htmlFor="breed-select">Filtrar por raza:</label>
          <select
 /*            className={style.select} */
            id="breed-select"
            value={selectedBreed}
            onChange={handlerFilterBreed}
          >
            <option value="">Todas</option>
            <option value="labrador">Labrador</option>
            <option value="bulldog">Bulldog</option>
            <option value="siames">Siames</option>
            <option value="persa">Persa</option>
            <option value="otra">Otra</option>
          </select>
        </div>

        <div>
          <label htmlFor="animal-select">Filtrar por tipo de animal:</label>
          <select
           /*  className={style.select} */
            id="animal-select"
            value={selectedAnimal}
            onChange={handlerFilterAnimal}
          >
            <option value="">Todos</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <label htmlFor="size">Filtrar por tamaño:</label>
        <select /* className={style.select} */ id="size" onChange={handlerFilterSize}>
          <option value="">Todos</option>
          <option value="4,9">Menos de 5kg y menos de 10cm</option>
          <option value="9.1,14.9">Entre 5 y 10kg y entre 10 y 15cm</option>
          <option value="10,15">Más de 10kg y más de 15cm</option>
        </select>

        <div>
          <label htmlFor="color-select">Filtrar por color:</label>
          <select
            /* className={style.select} */
            id="color-select"
            onChange={handlerFilterColor}
          >
            <option value="">Todos</option>
            <option value="negro">Negro</option>
            <option value="blanco">Blanco</option>
            <option value="cafe">Café</option>
            <option value="gris">Gris</option>
            <option value="rojo">Rojo</option>
            <option value="amarillo">Amarillo</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <label htmlFor="ident">ID:</label>

        <input
          type="text"
          id="ident"
          name="ident"
          onChange={handlerFilterIdent}
        />
      </div>
    </div>
  );
}