import { useState } from "react";
import "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: "e4",
    title: "New Desk (wodden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHadler = (expense) => {
    setExpenses((prev) => {
      return [...prev, expense];
    });
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHadler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
