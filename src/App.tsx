import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack
} from '@chakra-ui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  name: z.string().min(3).max(10)
});

interface User {
  name: string;
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (user: User) => {
    console.log('Submitted', user);
  };

  return (
    <Container p={4}>
      <form onSubmit={handleSubmit(user => onSubmit(user))}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor='name'>Nombre</FormLabel>
            <Input {...register('name')} id='name' type='text' />
            {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}
          </FormControl>

          <Button type='submit'>Submit</Button>
        </Stack>
      </form>
    </Container>
  );
}

export default App;
