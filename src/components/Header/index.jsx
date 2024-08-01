import Input from "../Input";
import Menu from "../Menu";

export default function Header() {
    return (
        <>
            <header className="flex justify-between mx-3 my-4 items-center gap-2">
                <img
                    src="./public/pokeball.svg"
                    className="w-10 p-0.5 bg-zinc-800 rounded-full shadow-md"
                    alt=""
                />
                <Input />
                <nav>
                    <Menu />
                </nav>
            </header>
        </>
    )
}

