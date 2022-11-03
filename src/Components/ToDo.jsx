import React, { useState } from "react";




function ToDo() {
    const [text, setText] = useState("");
    const [addIteam, setAddIteam] = useState([]);
    function handleText(event) {
        const setName = event.target.value;
        setText(setName);
    }

    function handleAddItem(event) {

        setAddIteam(prev => 
             [...prev, text ]
        )
        setText("");
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
                    {addIteam.map(item => 
                         (
                            <li>{item}</li>
                            )
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;
