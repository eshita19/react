const Student = (props) => {
    let  color = 'red';
    return (
        <div style = {{border : '1px solid black', color: color}}>
            <div>{props.name} {props.age} {props.gender}</div>
        </div>
    );
}

export default Student;