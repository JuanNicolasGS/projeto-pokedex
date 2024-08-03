export default function Card({ nome, numero, cor, imagem }) {
    return (
        <div className={`h-28 p-4 ${cor} rounded-md flex items-center justify-center flex-col relative`}>
            <span className="text-zinc-200 absolute top-2 right-3 font-bold">{numero}</span>
            <img src={imagem} className="w-24" alt="" />
            <span className="text-zinc-100 absolute bottom-2 left-3 font-bold">{nome}</span>
        </div>
    )
}