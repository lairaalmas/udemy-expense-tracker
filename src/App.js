import "./components/Expenses/ExpenseItem";
import ExpenseList from "./components/Expenses/ExpenseList";

const App = () => {
  const expenses = [
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
  return (
    <div>
      <h1>Let' get started!</h1>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
