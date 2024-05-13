// libraries
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  VStack,
  Button,
  Box,
} from "@chakra-ui/react";
import { z } from "zod";

export default function ExpenseForm() {
  return (
    <>
      <Box pt={4}>
        <form>
          <VStack spacing={4} align='start'>
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
            {/* Submit Button */}
            <Button type='submit' colorScheme='blue'>
              Add Expense
            </Button>
          </VStack>
        </form>
      </Box>
    </>
  );
}
