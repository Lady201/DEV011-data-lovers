// estas funciones son de ejemplo

export const renderItems = (data) => {
  const pokemons = data;

  const pokemonsContainer = document.createElement("ul");
  pokemonsContainer.setAttribute("class", "contenedor-pokemons");
  pokemonsContainer.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const pokemonCard = document.createElement("li");
    pokemonCard.setAttribute("class", "contenedor-imagen-pokemon");
    pokemonCard.innerHTML = `
    <div>
      <p class="pokename">${pokemon.name}</p>
      <img class="img-pokemon" id="imagePokemon" src="${pokemon.img}"> 
      <p class="poketipo">${pokemon.type}<p>
      </div>
      `;
      pokemonsContainer.appendChild(pokemonCard);
    });
  return pokemonsContainer;
};




