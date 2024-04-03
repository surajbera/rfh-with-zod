// libraries
import { useState } from 'react';
import { Container } from '@chakra-ui/react';

// components
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

// styles
import './App.css';

import { dummyData } from './data';

export interface IExpenseItem {
  id: string;
  title: string;
  amount: number;
  category: string;
}

function App() {
  const [expenseRecords, setExpenseRecords] = useState<IExpenseItem[]>(dummyData);

  const onDelete = (id: string) => {
    setExpenseRecords((prevExpenseRecords) => prevExpenseRecords.filter((item) => item.id !== id));
  };

  return (
    <>
      <Container>
        <ExpenseForm />
      </Container>

      <ExpenseList expenseRecords={expenseRecords} onDelete={onDelete} />
    </>
  );
}

export default App;
