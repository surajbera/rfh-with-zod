import { IExpenseItem } from '../App';
import { Tr, Td, Button } from '@chakra-ui/react';

export default function ExpenseItem({ item }: { item: IExpenseItem }) {
  return (
    <>
      <Tr key={item.id}>
        <Td>{item.title}</Td>
        <Td isNumeric>{item.amount}</Td>
        <Td>{item.category}</Td>
        <Td>
          <Button colorScheme='red' size='sm' onClick={() => console.log('clicked!!')}>
            Delete
          </Button>
        </Td>
      </Tr>
    </>
  );
}
