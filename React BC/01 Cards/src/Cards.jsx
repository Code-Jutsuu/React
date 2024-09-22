import './index.css';


function Cards(){

    return(

       
         <div className="card border border-gray-400 rounded-lg shadow-md p-5 m-2 text-center max-w-xs inline-block justify-center items-center">
            <img className='max-w-[60%] h-auto rounded-xl mb-3 ml-16 ' src="https://via.placeholder.com/150" alt="profile pic" />
            <h2 className="font-sans m-0 text-gray-800" > Baboon</h2>
            <p className="font-sans text-gray-700"> Baboon is like Gorilla and loves eating Banana</p>
        </div>

       
    );
}

export default Cards