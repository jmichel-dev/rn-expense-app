import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Book",
    amount: 59.99,
    date: new Date("2022-05-13"),
  },
  {
    id: "e2",
    title: "Pair of shoes",
    amount: 79.99,
    date: new Date("2022-05-13"),
  },
  {
    id: "e3",
    title: "Mouse wireless",
    amount: 159.99,
    date: new Date("2022-03-19"),
  },
  {
    id: "e4",
    title: "Keyboard bluetooth",
    amount: 259.59,
    date: new Date("2022-03-01"),
  },
  {
    id: "e5",
    title: "Dipers XXG Huggies",
    amount: 20.99,
    date: new Date("2022-04-20"),
  },
];

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
