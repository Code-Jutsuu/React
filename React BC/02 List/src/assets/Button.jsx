function Button(){

    const handleClick = (e) => e.target.textContent = "OUCH! ";

    return(
            <div className="flex justify-center bg-slate-400">
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out" 
                         onClick={(e) => handleClick(e)}>Click me </button>
            </div>);
}
export default Button