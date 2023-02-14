import { useState } from "react";
import Card from "../../UI/Card";
import ExpensesChart from "../ExpensesChart";
import ExpensesFilter from "../ExpensesFilter";
import ExpensesList from "../ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          expenses={props.expenses}
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
