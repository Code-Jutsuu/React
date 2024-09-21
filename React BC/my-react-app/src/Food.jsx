

function Food(){


    const food1 = "Orange";
    const food2 = "kiwi";

    return(
        <>
            <ul>
                <li> Apple</li>
                <li> Weed</li>
                <li> {food1}</li>
                <li> {food2.toUpperCase()}</li>
            </ul>
            <hr />
        </>
    );
}

export default Food