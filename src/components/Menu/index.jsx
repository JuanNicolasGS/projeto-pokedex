export default function Menu() {
    return (
        <div className="flex ml-2 w-full h-full p-0 justify-center align-middle">
            <button className="bg-zinc-800 rounded-full">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    className="bi bi-list m-2 w-6"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5  0  0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </button>
        </div>
    )
}