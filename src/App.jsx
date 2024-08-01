import './App.css'

function App() {

  return (
    <>
<<<<<<< HEAD
      <nav>
        <header className='flex'>
            <img src="./public/pokeball.svg" className='w-9 p-0.5 bg-zinc-800 rounded-full m-2 shadow-md' alt="" />
            <input  type="search" placeholder='Name or ID' className='w-3/4 rounded-full p-4 h-2 bg-zinc-800 m-2.5 shadow-md text-white' />
             {/*<svg xmlns="http://www.w3.org/2000/svg" id="button-search" width="16" height="16" fill="#a0a0a065"
                class="bi bi__search" viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg> */}
            <div className='flex ml-2 bg-zinc-800 rounded-full p-1 pt-0 '>
              <a href="" className='w-7'>
                <img src="./public/discord.svg" className='w-5 m-1 mt-3 p-0' alt="" />
              </a>  
              <a href="" className='w-7'>
                <img src="./public/houses.svg" className='w-5 m-1 mt-3 p-0' alt="" />
              </a>
              <a href="" className='w-10 p-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" className="bi bi-list m-2 mt-1.7"  viewBox="0   0 16 16">
=======
      <header className='flex'>
          <img src="./public/pokeball.svg" className='w-9 p-0.5 bg-zinc-800 rounded-full m-2 shadow-md' alt="" />
          <input type="search" placeholder='Name or ID' className='w-3/4 rounded-full p-4 h-2 bg-zinc-800 m-2.5 shadow-md text-white' />
          <svg xmlns="http://www.w3.org/2000/svg" id="button-search" width="16" height="16" fill="#a0a0a065"
            className="bi bi__search" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg> 
          <nav>
            <div className='flex ml-2 w-full h-full p-0 justify-center align-middle m-1'>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg"  fill="white" className='bi bi-list m-2 w-6 bg-zinc-800 rounded-full'  viewBox="0   0 16 16">
>>>>>>> staging
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5  0  0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
              </button>
            </div>
        </nav>
      </header>
    </>
  )
}

export default App
