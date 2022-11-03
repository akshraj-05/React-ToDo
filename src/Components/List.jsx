import React from "react"

function List(props) {
    function handleChange() {
        props.deleteAddItem(props.id)
    }

    return (
        <div onClick={handleChange}>
            <li> {props.item}</li>
        </div>
    );

}

export default List;