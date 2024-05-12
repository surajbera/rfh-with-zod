import { IExpenseItem } from "../App";
import { Tr, Td, Button } from "@chakra-ui/react";

interface Props {
  item: IExpenseItem;
  onDelete: (id: string) => void;
}

export default function ExpenseItem({ item, onDelete: handleDelete }: Props) {
  return (
    <Tr>
      <Td>{item.title}</Td>
      <Td isNumeric>{item.amount}</Td>
      <Td>{item.category}</Td>
      <Td>
        <Button colorScheme='red' size='sm' onClick={() => handleDelete(item.id)}>
          Delete
        </Button>
      </Td>
    </Tr>
  );
}
