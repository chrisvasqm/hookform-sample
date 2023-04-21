import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack
} from '@chakra-ui/react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3).max(10)
});

function App() {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Submitted');
  };

  return (
    <Container p={4}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input type='text' />
          </FormControl>

          <Button type='submit'>Submit</Button>
        </Stack>
      </form>
    </Container>
  );
}

export default App;
