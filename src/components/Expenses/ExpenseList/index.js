import Card from "../../UI/Card";
import ExpenseItem from "../ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        );
      })}
    </Card>
  );
};

export default ExpenseList;
