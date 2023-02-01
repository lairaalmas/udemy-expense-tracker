import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 3, 28);
  const expenseTitle = "Car Insurance";
  const expensaValue = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensaValue}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
