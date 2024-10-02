
import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return( <div className="color-picker-container flex flex-col items-center">
                <h1 className="my-12 text-6xl">Color Picker</h1>
                <div className="color-display w-72 h-72 flex justify-center items-center border-4 border-gray-300 rounded-3xl mb-6 transition ease-in-out duration-200"
                 style={{backgroundColor: color}}>
                    <p className="text-gray-700 text-4xl text-center">Selected Color: {color}</p>
                </div>
                <label  className="text-2xl font-bold mb-2" >Select a Color:</label>
                <input type="color"
                 value={color} 
                 onChange={handleColorChange}
                 className="w-20 h-12 p-2 rounded-lg border-4 border-gray-300"/>
            </div>);
}
export default ColorPicker