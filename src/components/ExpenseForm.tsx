import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  VStack,
} from '@chakra-ui/react';

export default function ExpenseForm() {
  return (
    <>
      <form>
        <VStack spacing={4}>
          {/* Expense Title */}
          <FormControl id='expense-title'>
            <FormLabel>Expense Title</FormLabel>
            <Input type='text' name='expense-title' />
          </FormControl>

          {/* Expense Amount */}
          <FormControl id='expense-amount'>
            <FormLabel>Expense Amount</FormLabel>
            <NumberInput>
              <NumberInputField name='expense-amount' />
            </NumberInput>
          </FormControl>

          {/* Expense Category */}
          <FormControl id='expense-category'>
            <FormLabel>Expense Category</FormLabel>
            <Select name='expense-category'>
              <option value='all-categories'>All Categories</option>
              <option value='food-dining'>Food & Dining</option>
              <option value='transportation'>Transportation</option>
              <option value='housing'>Housing</option>
              <option value='personal-care'>Personal Care</option>
            </Select>
          </FormControl>
        </VStack>
      </form>
    </>
  );
}
