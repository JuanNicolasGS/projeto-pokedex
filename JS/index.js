const api = "https://pokeapi.co/api/v2/";
const pokemon_id = 1;
const pokemon_name = document.getElementById("poke_name");
const pokemon_background_img = document.getElementById("pokemon-background");
const pokemon_img = document.getElementById("poke_img");
const pokemon_hp = document.getElementById("pokemon_hp");
const pokemon_atk = document.getElementById("pokemon_atk");
const pokemon_def = document.getElementById("pokemon_def");
const pokemon_esp_atk = document.getElementById("pokemon_esp_atk");
const pokemon_esp_def = document.getElementById("pokemon_esp_def");
const pokemon_vel = document.getElementById("pokemon_vel");
const pokemon_box_types = document.getElementById("types__box");
const pokemon_type = document.getElementById("poke__type1");
const pokemonTypesImages = {
  normal: "./IMGS/normal.png",
  fire: "./IMGS/fire.png",
  water: "./IMGS/water.png",
  electric: "./IMGS/electric.png",
  grass: "./IMGS/grass.png",
  ice: "./IMGS/ice.png",
  fighting: "./IMGS/fighting.png",
  poison: "./IMGS/poison.png",
  ground: "./IMGS/ground.png",
  flying: "./IMGS/flying.png",
  psychic: "./IMGS/psychic.png",
  bug: "./IMGS/bug.png",
  rock: "./IMGS/rock.png",
  ghost: "./IMGS/ghost.png",
  dragon: "./IMGS/dragon.png",
  dark: "./IMGS/dark.png",
  steel: "./IMGS/steel.png",
  fairy: "./IMGS/fairy.png",
};
const search_input = document.getElementById("input");
const button_search = document.getElementById("button-search");

search_input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    button_search.dispatchEvent(new MouseEvent("click"));
  }
});

fetch(api + `pokemon/${pokemon_id}`)
  .then((res) => res.json())
  .then((json) => {
    document.getElementById("poke_id").innerHTML = json.id;
    pokemon_name.innerHTML = json.name;
    pokemon_img.src = json.sprites.other.home.front_default;
    const pokemon_stats = json.stats;
    pokemon_hp.value = pokemon_stats[0].base_stat;
    pokemon_atk.value = pokemon_stats[1].base_stat;
    pokemon_def.value = pokemon_stats[2].base_stat;
    pokemon_esp_atk.value = pokemon_stats[3].base_stat;
    pokemon_esp_def.value = pokemon_stats[4].base_stat;
    pokemon_vel.value = pokemon_stats[5].base_stat;
    if (json.types.length == 2) {
      pokemon_box_types.innerHTML += `<img src="${
        pokemonTypesImages[json.types[0].type.name]
      }" class="poke__types" id="poke__type1" alt=" primeiro tipo do pokemon">`;
      pokemon_box_types.innerHTML += `<img src="${
        pokemonTypesImages[json.types[1].type.name]
      }" class="poke__types" id="poke__type2" alt=" segundo tipo do pokemon">`;
    } else {
      pokemon_box_types.innerHTML += `<img src="${
        pokemonTypesImages[json.types[0].type.name]
      }" class="poke__types" id="poke__type1" alt=" primeiro tipo do pokemon">`;
    }
  });

button_search.addEventListener("click", () => {
  if (search_input.value.trim() === "") {
    alert("Digite um nome ou ID de um pokemon...");
  } else {
    pokemon_box_types.innerHTML = "";

    fetch(api + `pokemon/${search_input.value.toLowerCase()}`)
      .then((res) => res.json())
      .then((json) => {
        document.getElementById("poke_id").innerHTML = json.id;
        pokemon_name.innerHTML = json.name;
        fetch(api + `pokemon-species/${json.id}`)
          .then((data) => data.json())
          .then((info_color) => {
            const cor = info_color.color.name;
            pokemon_background_img.style.backgroundColor = `var(--color-poke${cor})`;
          });
        pokemon_img.src = json.sprites.other.home.front_default;
        const pokemon_stats = json.stats;
        pokemon_hp.value = pokemon_stats[0].base_stat;
        pokemon_atk.value = pokemon_stats[1].base_stat;
        pokemon_def.value = pokemon_stats[2].base_stat;
        pokemon_esp_atk.value = pokemon_stats[3].base_stat;
        pokemon_esp_def.value = pokemon_stats[4].base_stat;
        pokemon_vel.value = pokemon_stats[5].base_stat;

        if (json.types.length == 2) {
          pokemon_box_types.innerHTML += `<img src="${
            pokemonTypesImages[json.types[0].type.name]
          }" class="poke__types" id="poke__type1" alt=" primeiro tipo do pokemon">`;
          pokemon_box_types.innerHTML += `<img src="${
            pokemonTypesImages[json.types[1].type.name]
          }" class="poke__types" id="poke__type2" alt=" segundo tipo do pokemon">`;
        } else {
          pokemon_box_types.innerHTML += `<img src="${
            pokemonTypesImages[json.types[0].type.name]
          }" class="poke__types" id="poke__type1" alt=" primeiro tipo do pokemon">`;
        }
      });
    search_input.value = "";
  }
}); 