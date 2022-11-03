import React, { useState } from "react";
import List from "./List";




function ToDo() {
    const [text, setText] = useState("");
    const [addIteam, setAddIteam] = useState([]);
    function handleText(event) {
        const setName = event.target.value;
        setText(setName);
    }

    function handleAddItem() {
        addIteam.push(text);
        setAddIteam(addIteam)
        setText("");
    }

    function deleteAddItem(id) {
        setAddIteam(prev => {
            return prev.filter((item, index) => {
                return index !== id;
            })
        })

    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleText} type="text" value={text} />
                <button onClick={handleAddItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {addIteam.map((item, index) =>
                    (
                        <List
                            key={index}
                            id={index}
                            item={item}
                            deleteAddItem={deleteAddItem}
                        />
                    )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;
