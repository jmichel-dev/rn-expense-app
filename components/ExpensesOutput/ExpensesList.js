import { StyleSheet, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpensesItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
};

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({});
