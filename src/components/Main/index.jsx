import Card from "../Card";

const pokemons = [
    {
        numero: "#0001",
        nome: "Bulbasaur",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
        cor: "bg-green-500"
    },
    {
        numero: "#0002",
        nome: "Ivysaur",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
        cor: "bg-green-500"
    },
    {
        numero: "#0003",
        nome: "Venusaur",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
        cor: "bg-green-500"
    },
    {
        numero: "#0004",
        nome: "Charmander",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
        cor: "bg-red-400"
    },
    {
        numero: "#0005",
        nome: "Charmeleon",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
        cor: "bg-red-400"
    },
    {
        numero: "#0006",
        nome: "Charizard",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
        cor: "bg-red-400"
    },
    {
        numero: "#0007",
        nome: "Squirtle",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
        cor: "bg-blue-400"
    },
    {
        numero: "#0008",
        nome: "Wartortle",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
        cor: "bg-blue-400"
    },
    {
        numero: "#0009",
        nome: "Blastoise",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
        cor: "bg-blue-400"
    },
    {
        numero: "#0010",
        nome: "Caterpie",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
        cor: "bg-green-500"
    },
    {
        numero: "#0011",
        nome: "Metapod",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
        cor: "bg-green-500"
    },
    {
        numero: "#0012",
        nome: "Butterfree",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
        cor: "bg-slate-400"
    },
    {
        numero: "#0013",
        nome: "Weedle",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
        cor: "bg-orange-400"
    },
    {
        numero: "#0014",
        nome: "Kakuna",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
        cor: "bg-yellow-400"
    },
    {
        numero: "#0015",
        nome: "Beedrill",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
        cor: "bg-yellow-400"
    },
    {
        numero: "#0016",
        nome: "Pidgey",
        imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
        cor: "bg-orange-400"
    }
];

export default function Main() {


    return (
        <main className="flex flex-col h-full w-full justify-center items-center">
            <div className="w-11/12 h-full bg-zinc-800 grid grid-cols-2 grid-rows-4 gap-4 rounded-xl p-4">
                {pokemons.map(pokemon => 
                    <Card
                        key={pokemon.numero}
                        nome={pokemon.nome}
                        imagem={pokemon.imagem}
                        cor={pokemon.cor}
                        numero={pokemon.numero}
                    />
                )}
            </div>
        </main>
    )
}