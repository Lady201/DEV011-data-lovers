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
export const filterByName = (pokemons, value) => {
  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(value)
  );
  return pokemonsByName;
};

export const averageWeight = (pokemons) => {
  const pokemonsWeight = pokemons.map((pokemon) =>
    parseFloat(pokemon.size.weight)
  );

  return (
    (pokemonsWeight.reduce((acc, item) => acc + item, 0) / pokemonsWeight.length).toFixed(2)
  );
};
