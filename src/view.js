// estas funciones son de ejemplo

export const renderItems = (data) => {
  console.log("data ingresaada: ", data);
  const pokemons = data;

  const pokemonsContainer = document.createElement("ul");
  pokemonsContainer.setAttribute("class", "contenedor-pokemons");
  pokemonsContainer.innerHTML = "";
  pokemons.forEach((pokemon) => {
    const pokemonCard = document.createElement("li");
    pokemonCard.setAttribute("class", "contenedor-imagen-pokemon");
    pokemonCard.innerHTML = `
      <p class="pokename">${pokemon.name}</p>
      <img class="img-pokemon" id="imagePokemon" src="${pokemon.img}"> 
      <p class="poketipo">${pokemon.type}<p>
      `;
      pokemonsContainer.appendChild(pokemonCard);
    });

    console.log(pokemonsContainer);
  return pokemonsContainer;
};




