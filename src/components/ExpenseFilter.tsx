// libraries
import { Container, Text, Select, Box, Stack } from "@chakra-ui/react";

export default function ExpenseFilter() {
  return (
    <Container maxW='container.md' px={4} mt={8}>
      <Stack direction='row' spacing={4} align='center' justifyContent='flex-end'>
        <Text as='span' fontWeight='bold'>
          Filter By:
        </Text>
        <Box width='auto' display='inline-block'>
          <Select name='expense-category'>
            <option value='all-categories'>All Categories</option>
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
