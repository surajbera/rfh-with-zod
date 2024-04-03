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

  return (
    <>
      <Container>
        <ExpenseForm />
      </Container>

      <ExpenseList expenseRecords={expenseRecords} />
    </>
  );
}

export default App;
