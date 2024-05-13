// libraries
import { Container, Text, Select, Box, Stack } from "@chakra-ui/react";

interface ExpenseFilterProps {
  onSelectCategory: (category: string) => void;
}

export default function ExpenseFilter({ onSelectCategory }: ExpenseFilterProps) {
  return (
    <Container maxW='container.md' px={4} mt={8}>
      <Stack direction='row' spacing={4} align='center' justifyContent='flex-end'>
        <Text as='span' fontWeight='bold'>
          Filter By:
        </Text>
        <Box width='auto' display='inline-block'>
          <Select
            name='expense-category'
            onChange={(event) => onSelectCategory(event.target.value)}
          >
            <option value=''>All Categories</option>
            <option value='food-dining'>Food & Dining</option>
            <option value='transportation'>Transportation</option>
            <option value='housing'>Housing</option>
            <option value='personal-care'>Personal Care</option>
          </Select>
        </Box>
      </Stack>
    </Container>
  );
}
