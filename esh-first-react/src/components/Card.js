import "./Card.css"
import { useState } from "react";

//wrapper component which has composition 
const Card = (props) => {
    console.log("Card component being evaluated");
    
    //Using useState we achieve two-way binding for a props element. 
    //React component will be revaluated when state changes
    const [title, setTitle] = useState(props.title)
    const [uName, setUName] = useState('')

    const clickHandler = () => {
        setTitle("Eshita Mathur")
        console.log("Current title: " + title);
    };

    const submitForm = (event) => {
        event.preventDefault();
        console.log("User name is " + uName);
    }

    const nameChangeHandler = (e) => {
       setUName(e.target.value);
    };
    

    return (<div className="card-border">
            {props.children}
            {title}
            <input type="text" value={uName} onChange={nameChangeHandler}></input>
            <button value="Submit" onClick={clickHandler}></button>
            <button type="submit" onClick={submitForm}></button>
            </div>)
}
export default Card;