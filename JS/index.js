const api = "https://pokeapi.co/api/v2/"
const pokeimg = document.getElementById("pokeimg")
const poke = document.getElementById("poke")
const types = document.getElementById("types")
const abilities = document.getElementById("abilities")
const stats = document.getElementById("stats")
const moves = document.getElementById("moves")
const items = document.getElementById("items")

fetch(api+"pokemon/9")
    .then(res => res.json())
    .then(json => {
        console.log(json)
        pokeimg.src = json.sprites.other["official-artwork"].front_default
        poke.innerHTML = json.name
        if (json.types.length == 2) {
            types.innerHTML ="Tipos: "+ json.types[0].type.name + ", " + json.types[1].type.name
        } else {
            types.innerHTML ="Tipos: "+ json.types[0].type.name
        }
        abilities.innerHTML = "Habilidades: " + json.abilities[0].ability.name + ", " + json.abilities[1].ability.name
        stats.innerHTML = "Stats: " + json.stats[0].base_stat + ", " + json.stats[1].base_stat + 
        ", " + json.stats[2].base_stat + ", " + json.stats[3].base_stat + ", "
        + json.stats[4].base_stat + ", " + json.stats[5].base_stat
        items.innerHTML = "Held Items: " + json.helditems
        moves.innerHTML = "Moves: " + json.moves[0].move.name + ", " + json.moves[1].move.name
    })
