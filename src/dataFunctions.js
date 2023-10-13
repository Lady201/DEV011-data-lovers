// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};

export const filterByType = (pokemons, value) => {
  const pokemonsByType = pokemons.filter((pokemon) =>
    pokemon.type.includes(value)
  );
  return pokemonsByType;
};

export const filterByResistant = (pokemons, value) => {
  const pokemonsByResistant = pokemons.filter((pokemon) =>
    pokemon.resistant.includes(value)
  );
  return pokemonsByResistant;
};

/*investigar método filter y aplicar a data
  filterBy, valor para filtrar (nombre,tipo)
  value, condición que se cumple*/
  
