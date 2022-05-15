import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenseContext";

export default function AllExtenses() {
  const ctx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={ctx.expenses}
      fallbackText="No expenses found."
    />
  );
}
