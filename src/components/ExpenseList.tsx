// libraries
import { Table, Thead, Tbody, Tr, Th, Container } from '@chakra-ui/react';

// components
import ExpenseItem from './ExpenseItem';

// interface
import { IExpenseItem } from '../App';
interface IExpenseRecords {
  expenseRecords: IExpenseItem[];
}

export default function ExpenseList({ expenseRecords }: IExpenseRecords) {
  return (
    <>
      <Container maxW='container.md' px={4} pt={8}>
        <Table variant='striped' colorScheme='gray'>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th isNumeric>Amount</Th>
              <Th>Category</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenseRecords.map((item) => (
              <ExpenseItem item={item} />
            ))}
          </Tbody>
        </Table>
      </Container>
    </>
  );
}
