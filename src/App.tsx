// libraries
import { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";

// components
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

// styles
import "./App.css";

import { dummyData } from "./data";

export interface IExpenseItem {
  id: string;
  title: string;
  amount: number;
  category: string;
}

function App() {
  const [expenseRecords, setExpenseRecords] = useState<IExpenseItem[]>(dummyData);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: string) => {
    setExpenseRecords((prevExpenseRecords) => prevExpenseRecords.filter((item) => item.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenseRecords.filter((e) => e.category === selectedCategory)
    : expenseRecords;

  return (
    <>
      <Container>
        <ExpenseForm />
      </Container>
      <ExpenseFilter onSelectCategory={setSelectedCategory} />
      <ExpenseList expenseRecords={visibleExpenses} onDelete={handleDelete} />
    </>
  );
}

export default App;
