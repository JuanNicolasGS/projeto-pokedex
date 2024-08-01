export default function Input() {
    return (
        <div className="w-full relative" >
            <input
                type="search"
                placeholder="Name or ID"
                className="rounded-full w-full p-4 h-4 bg-zinc-800 shadow-md text-white"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="button-search"
                width="18"
                height="18"
                fill="#FFFFFF"
                className="bi bi__search cursor-pointer absolute top-1.5 right-2.5"
                viewBox="0 0 16 16"
            >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
        </div>
    )
}