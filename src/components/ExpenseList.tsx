// libraries
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Container } from '@chakra-ui/react';

// components
import ExpenseItem from './ExpenseItem';

// interface
import { IExpenseItem } from '../App';
interface Props {
  expenseRecords: IExpenseItem[];
  onDelete: (id: string) => void;
}

export default function ExpenseList({ expenseRecords, onDelete }: Props) {
  const totalAmount = expenseRecords.reduce((acc, record) => {
    return acc + record.amount;
  }, 0);

  return (
    <>
      <Container maxW='container.md' px={4} py={8}>
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
              <ExpenseItem item={item} onDelete={onDelete} key={item.id} />
            ))}
          </Tbody>
          <Tfoot bg='blue.100'>
            <Tr fontWeight='bold' fontStyle='italic'>
              <Td>Total:</Td>
              <Td isNumeric>{totalAmount}</Td>
              <Td></Td>
              <Td></Td>
            </Tr>
          </Tfoot>
        </Table>
      </Container>
    </>
  );
}
