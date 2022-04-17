import Card from "./Card";
import "./ExpenseItem.css"
import { useState } from "react";

function ExpenseItem(props){//Props is a single object containing all the attributes passed to component

    //Injecting values dynamically through JSX expression. Note value should not be object.
    const expenseTitle = "This is an expense item loaded from JS";
    const [expenseAmt, setExpenseAmt] = useState('esh')

    const expenseAmtChangeHandler = (event) => {
        setExpenseAmt(event.value);
        props.onExpenseAmtChange(event.target.value);
    }
    
    return (<Card title="esh">
                <div className="expenseItem-desc">{expenseTitle} - {props.expenseVal}</div>
                <input type="text" value={expenseAmt} onChange={expenseAmtChangeHandler} ></input>
            </Card>);
}

export default ExpenseItem;