import React, {useRef, useEffect}  from "react";
// import {uuid } from "uuidv4";
import { v4 as uuid } from "uuid";

function AddToDo ({add}) {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    function handleSubmit (event) {
        event.preventDefault();
        if (!inputRef.current.value) return;
        add({id: uuid(), content: inputRef.current.value, completed: false}) 
        inputRef.current.value = "";
    }
    return (
        
            <form onSubmit={handleSubmit}>
                <div className="container" style={{width:"60%"}}>
                <input type="text" className="form-control" id="new-item" placeholder="Add new To Do" ref={inputRef} autoFocus/>
                <button className="btn btn-primary" type="submit">Add</button>
                </div>
            </form>
           
    )
}

export default AddToDo;