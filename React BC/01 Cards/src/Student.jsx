
function Student(props){

    return(
        <>
         <div className="card border bg-cyan-800 border-gray-400 rounded-lg shadow-lg shadow-orange-300 p-5 m-2 text-center max-w-xs inline-block justify-center items-center">
             <img className='max-w-[60%] h-auto rounded-xl mb-3 ml-16 ' src= {props.img} alt="profile pic" />
             <h2 className="font-sans m-0 text-gray-950" > {props.name}</h2>
             <p className="font-sans text-gray-800">Student: {props.student ? "Yes":"No"} </p>
             <p className="font-sans text-gray-800"> {props.bio} </p>
         </div>
        
        </>

    );

}
Student.propTypes ={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};
export default Student