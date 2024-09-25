
function List(props){

    const category = props.category;
    const itemList = props.items;

    // itemList.sort((a, b) => a.name.localeCompare(b.name)); // SORT ALPHABETICAL
    // itemList.sort((a, b) => a.calories - b.calories); // SORT BY CALORIES
    // const lowCalItem = itemList.filter(item => item.calories < 100); // FILTER LOW CALORIES
    // const highCalItem = itemList.filter(item => item.calories >= 100); // FILTER HIGH CALORIES

    const listitems = itemList.map(item => <li key={item.id}  className="hover:bg-gray-500 cursor-pointer transition-colors duration-300 ease-in-out">
                                           {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>)
                                           

    return(
        <>
            <h3  className="list-category text-4xl font-bold text-gray-800 mb-2 text-center border-4 border-solid rounded-md bg-cyan-500"> {category}</h3>
            <ol className="list-items text-3xl list-none text-gray-700 text-center m-0 cursor-pointer" > {listitems} </ol>
           
        </>
    );

}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items: [],
}

export default List