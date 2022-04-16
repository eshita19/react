import "./Card.css"
//wrapper component which has composition 
const Card = (props) => {
    const clickHandler = () => console.log("Element was clicked");
    return (<div className="card-border">
            {props.children}
            <button value="Submit" onClick={clickHandler}></button>
            </div>)
}
export default Card;