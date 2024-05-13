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
  Text,
} from "@chakra-ui/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = ["food-dining", "transportation", "housing", "personal-care"] as const;

const schema = z.object({
  "expense-title": z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be under 50 characters"),
  "expense-amount": z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, "Amount must be greater than zero")
    .max(100_000, "Amount must not exceed 100,000"),
  "expense-category": z.enum([...categories], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

export default function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <Box pt={4}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <VStack spacing={4} align='start'>
            {/* Expense Title */}
            <FormControl id='expense-title'>
              <FormLabel>Expense Title</FormLabel>
              <Input {...register("expense-title")} type='text' />
              {errors["expense-title"] && (
                <Text color='red.500' fontSize='sm' mt={2}>
                  {errors["expense-title"].message}
                </Text>
              )}
            </FormControl>

            {/* Expense Amount */}
            <FormControl id='expense-amount'>
              <FormLabel>Expense Amount</FormLabel>
              <NumberInput>
                <NumberInputField {...register("expense-amount", { valueAsNumber: true })} />
              </NumberInput>
              {errors["expense-amount"] && (
                <Text color='red.500' fontSize='sm' mt={2}>
                  {errors["expense-amount"].message}
                </Text>
              )}
            </FormControl>
            {/* Expense Category */}
            <FormControl id='expense-category'>
              <FormLabel>Expense Category</FormLabel>
              <Select {...register("expense-category")}>
                <option value=''></option>
                <option value='food-dining'>Food & Dining</option>
                <option value='transportation'>Transportation</option>
                <option value='housing'>Housing</option>
                <option value='personal-care'>Personal Care</option>
              </Select>
              {errors["expense-category"] && (
                <Text color='red.500' fontSize='sm' mt={2}>
                  {errors["expense-category"].message}
                </Text>
              )}
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
