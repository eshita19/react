import Card from "./Card";
import "./ExpenseItem.css"

function ExpenseItem(props){//Props is a single object containing all the attributes passed to component

    //Injecting values dynamically through JSX expression. Note value should not be object.
    const expenseTitle = "This is an expense item loaded from JS";

    
    return (<Card>
                <div className="expenseItem-desc">{expenseTitle} - {props.expenseVal}</div>
            </Card>);
}

export default ExpenseItem;