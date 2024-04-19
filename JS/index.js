const api = "https://pokeapi.co/api/v2/";
const pokemon_id = 25;
const pokemon_name = document.getElementById("poke_name");
const pokemon_img = document.getElementById("poke_img");
const pokemon_hp = document.getElementById("pokemon_hp");
const pokemon_atk = document.getElementById("pokemon_atk");
const pokemon_def = document.getElementById("pokemon_def");
const pokemon_esp_atk = document.getElementById("pokemon_esp_atk");
const pokemon_esp_def = document.getElementById("pokemon_esp_def");
const pokemon_vel = document.getElementById("pokemon_vel");

fetch(api + `pokemon/${pokemon_id}`)
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
    document.getElementById("poke_id").innerHTML = pokemon_id;
    pokemon_name.innerHTML = json.name;
    pokemon_img.src = json.sprites.other.home.front_default;
    const pokemon_stats = json.stats;
    pokemon_hp.value = pokemon_stats[0].base_stat;
    pokemon_atk.value = pokemon_stats[1].base_stat;
    pokemon_def.value = pokemon_stats[2].base_stat;
    pokemon_esp_atk.value = pokemon_stats[3].base_stat;
    pokemon_esp_def.value = pokemon_stats[4].base_stat;
    pokemon_vel.value = pokemon_stats[5].base_stat;
  });
