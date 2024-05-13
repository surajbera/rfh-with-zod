// libraries
import { useState } from "react";
import { Container } from "@chakra-ui/react";

// components
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

// styles
import "./App.css";

import { initialData } from "./data";

export interface IExpenseItem {
  id?: string;
  title: string;
  amount: number;
  category: string;
}

function App() {
  const [expenseRecords, setExpenseRecords] = useState<IExpenseItem[]>(initialData);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: string) => {
    setExpenseRecords((prevExpenseRecords) => prevExpenseRecords.filter((item) => item.id !== id));
  };

  const handleAddExpense = (newExpense: IExpenseItem) => {
    setExpenseRecords((prevExpenseRecords) => [
      ...prevExpenseRecords,
      { ...newExpense, id: `id_${prevExpenseRecords.length + 1}` }, // Ensuring ID uniqueness
    ]);
  };

  const visibleExpenses = selectedCategory
    ? expenseRecords.filter((e) => e.category === selectedCategory)
    : expenseRecords;

  return (
    <>
      <Container>
        <ExpenseForm onSubmit={handleAddExpense} />
      </Container>
      <ExpenseFilter onSelectCategory={setSelectedCategory} />
      <ExpenseList expenseRecords={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
