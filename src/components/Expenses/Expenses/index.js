import { useState } from "react";
import Card from "../../UI/Card";
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expenseContent = <p style={{ color: "lightgray" }}>Lista vazia</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          expenses={props.expenses}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
