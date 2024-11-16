const fetchPokemonData = async (page = 1) => {
  const limit = 20;
  const offset = (page - 1) * limit;

  try {
    // Faz a requisição para a API para pegar a lista de Pokémon
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await response.json();

    // Processa os detalhes de cada Pokémon
    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const infoPoke = await response.json();

        const speciesResponse = await fetch(infoPoke.species.url);
        const speciesData = await speciesResponse.json();
        const color = speciesData.color.name;

        return {
          name: infoPoke.name,
          id: infoPoke.id,
          sprites: infoPoke.sprites.other.home.front_default,
          color: color,
        };
      })
    );

    return console.log(pokemonDetails); // Retorna os dados de todos os Pokémon
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return []; // Se der erro, retorna um array vazio
  }
};

export default fetchPokemonData();