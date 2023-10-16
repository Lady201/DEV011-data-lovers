export const filterData = (pokemons, filterBy, value) => {
  if(value === 'all'){
    return pokemons
  }
  const pokemonsByType = pokemons.filter((pokemon) =>
    pokemon[filterBy].includes(value)
  );
  return pokemonsByType;
};

export const filterByResistant = (pokemons, value) => {
  if(value === 'all'){
    return pokemons
  }
  const pokemonsByResistant = pokemons.filter((pokemon) =>
    pokemon.resistant.includes(value)
  );
  return pokemonsByResistant;
};

export const filterByName = (pokemons, value) => {
  if(value === 'all'){
    return pokemons
  }
  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(value)
  );
  return pokemonsByName;
};

export const averageWeight = (pokemons) => {
  const pokemonsWeight = pokemons.map((pokemon) =>
    parseFloat(pokemon.size.weight)
    //parseFloat analiza una cadena de strings y las convierte en un número decimal.
  );

  return (
    (pokemonsWeight.reduce((acc, item) => acc + item, 0) / pokemonsWeight.length).toFixed(2)
  );
};


export const sortData = (data, sortBy, sortOrder) => {
  const cloneData = [...data]
  if (sortOrder === "asc") {
    cloneData.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else if (sortOrder=== "desc") {
    cloneData.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }
  return cloneData
}

