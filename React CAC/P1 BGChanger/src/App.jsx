import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className="bg-black w-full h-screen"
           style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center top-40 inset-x-20 px-2 bg-white rounded-md p-1"> Background Changer
      </div>   
      <div className="fixed flex flex-wrap justify-center bottom-12 gap-3 shadow-2xl px-3 py-2 inset-x-20 bg-white rounded-xl "> 
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
            style={{backgroundColor: "red"}}
          >Red
          </button>

          <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
            style={{backgroundColor: "blue"}}
          >Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
            style={{backgroundColor: "green"}}
          >Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-xl text-black shadow-lg"
            style={{backgroundColor: "yellow"}}
          >Yellow
          </button>

          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
            style={{backgroundColor: "gray"}}
          >Gray
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
            style={{backgroundColor: "purple"}}
          >Purple
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-xl text-black shadow-lg"
            style={{backgroundColor: "orange"}}
          >Orange
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-xl text-black shadow-lg"
            style={{backgroundColor: "pink"}}
          >Pink
          </button>

       </div>  
      </div>
     
    
  )
}

export default App
