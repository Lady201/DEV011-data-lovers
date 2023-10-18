// import { type } from './dataFunctions.js';
import data from "./data/pokemon/pokemon.js";
import {
  filterData,
  averageWeight,
  sortData,
} from "./dataFunctions.js";
import { renderItems } from "./view.js";

const pokemons = data.pokemon;

let allData = pokemons;

// Selectores del DOM
const pokemonsContainerRoot = document.getElementById("root");
const filterType = document.querySelector("select[data-testid='filter-type']");
const filterResistant = document.querySelector(
  "select[data-testid='filter-resistant']"
);
const nameInput = document.querySelector("input[id='name']");
const selectOrder = document.querySelector("select[data-testid='select-sort']");
const averagePokemonWeight = document.querySelector(
  "h2[data-testid='Average-weight']"
);
const limpiarBusqueda = document.getElementById("limpiarBusqueda");

//Eventos del DOM
window.addEventListener("load", () => {
  pokemonsContainerRoot.innerHTML = ' '
  pokemonsContainerRoot.appendChild(renderItems(allData));
  const averagePokemonWeightValue = averageWeight(pokemons);
  averagePokemonWeight.innerHTML =
    "Average Pokemon Weight: " + averagePokemonWeightValue;
});
//Filtar por tipo
filterType.addEventListener("change", function () {
  const selectValue = filterType.value;
  allData = filterData(allData, "type", selectValue);
  console.log("tipo: ", allData);
  if (allData.length > 0) {
    console.log("contenedor: ", pokemonsContainerRoot);
    const pokemons = renderItems(allData);
    pokemonsContainerRoot.innerHTML = ' '
    pokemonsContainerRoot.appendChild(pokemons)
  } else {
    console.log("contenedor no: ", pokemonsContainerRoot);
    pokemonsContainerRoot.innerHTML = 'No hay coincidencias, "click en limpiar búsqueda"';
  }
});

//Filtrar por resistencia
filterResistant.addEventListener("change", function () {
  const selectValue = filterResistant.value;
  allData = filterData(allData, "resistant", selectValue);
  console.log("resistant", allData);

  if (allData.length > 0) {
    const pokemons = renderItems(allData);
    pokemonsContainerRoot.innerHTML = ' '
    pokemonsContainerRoot.appendChild(pokemons)
  } else {
    pokemonsContainerRoot.innerHTML = '<p>No hay coincidencias, "click en limpiar búsqueda"</p>';
  }
});

//Búsqueda
nameInput.addEventListener("input", function () {
  const byName = nameInput.value;
  allData = filterData(allData, "name", byName);
  console.log("search", allData);

  if (allData.length > 0) {
    const pokemons = renderItems(allData);
    pokemonsContainerRoot.innerHTML = ' '
    pokemonsContainerRoot.appendChild(pokemons)
  } else {
    pokemonsContainerRoot.innerHTML =
      '<p>No hay coincidencias, "click en limpiar búsqueda"</p>';
  }
});

//Ordenar asc y desc
selectOrder.addEventListener("change", (event) => {
  const option = event.target.value;
  allData = sortData(allData, "name", option);
  console.log("order: ", allData);

  if (allData.length > 0) {
    const pokemons = renderItems(allData);
    pokemonsContainerRoot.innerHTML = ' '
    pokemonsContainerRoot.appendChild(pokemons)
  } else {
    pokemonsContainerRoot.innerHTML =
      '<p>No hay coincidencias, "click en limpiar búsqueda"</p>';
  }
});

limpiarBusqueda.addEventListener("click", function () {
  console.log('click');
  // Restablece los filtros a su estado predeterminado
  const filterType = document.querySelector(
    "select[data-testid='filter-type']"
  );
  filterType.selectedIndex = 0;

  const filterResistant = document.querySelector(
    "select[data-testid='filter-resistant']"
  );
  filterResistant.selectedIndex = 0;

  // Vuelve a mostrar todos los Pokémon sin filtros
  allData = pokemons;
  pokemonsContainerRoot.innerHTML = ' '
  pokemonsContainerRoot.appendChild(renderItems(allData))
});