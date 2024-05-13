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
  id: z.string().optional(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be under 50 characters"),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01, "Amount must be greater than zero")
    .max(100_000, "Amount must not exceed 100,000"),
  category: z.enum([...categories], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

export default function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm = (data: ExpenseFormData) => {
    onSubmit(data); // Call the parent handler
    reset(); // Reset the form fields after submission
  };

  return (
    <>
      <Box pt={4}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <VStack spacing={4} align='start'>
            {/* Expense Title */}
            <FormControl id='expense-title'>
              <FormLabel>Expense Title</FormLabel>
              <Input {...register("title")} type='text' />
              {errors["title"] && (
                <Text color='red.500' fontSize='sm' mt={2}>
                  {errors["title"].message}
                </Text>
              )}
            </FormControl>

            {/* Expense Amount */}
            <FormControl id='expense-amount'>
              <FormLabel>Expense Amount</FormLabel>
              <NumberInput>
                <NumberInputField {...register("amount", { valueAsNumber: true })} />
              </NumberInput>
              {errors["amount"] && (
                <Text color='red.500' fontSize='sm' mt={2}>
                  {errors["amount"].message}
                </Text>
              )}
            </FormControl>
            {/* Expense Category */}
            <FormControl id='expense-category'>
              <FormLabel>Expense Category</FormLabel>
              <Select {...register("category")}>
                <option value=''></option>
                <option value='food-dining'>Food & Dining</option>
                <option value='transportation'>Transportation</option>
                <option value='housing'>Housing</option>
                <option value='personal-care'>Personal Care</option>
              </Select>
              {errors["category"] && (
                <Text color='red.500' fontSize='sm' mt={2}>
                  {errors["category"].message}
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
