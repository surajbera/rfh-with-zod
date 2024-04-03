import { Container } from '@chakra-ui/react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <>
      <Container>
        <ExpenseForm />
      </Container>

      <ExpenseList />
    </>
  );
}

export default App;
