const fetchPokemonData = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const infoPoke = await response.json();

      const speciesResponse = await fetch(infoPoke.species.url);
      const speciesData = await speciesResponse.json();
      const color = speciesData.color.name;

      // Retornando os dados estruturados
      return {
        name: infoPoke.name,
        id: infoPoke.id,
        sprites: infoPoke.sprites.other.home.front_default,
        color: color,
      };
    })
  );

  console.log(pokemonDetails);
};

fetchPokemonData();
