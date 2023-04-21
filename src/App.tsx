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
import { DefaultValues, FieldValues, useForm } from 'react-hook-form';

const schema = z.object({
  name: z
    .string()
    .min(3, { message: 'Nombre no debe ser menor a 3 caracteres' })
    .max(10, { message: 'Nombre no debe ser mayor a 10 caracteres' }),
  age: z.number().min(18, { message: 'Edad debe ser mayor o igual a 18' }).positive()
});

type FormData = z.infer<typeof schema>;

const initialFormData: DefaultValues<FormData> = {
  name: undefined,
  age: 0
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: initialFormData,
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: FieldValues) => {
    console.log('Submitted', data);
  };

  return (
    <Container p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl isInvalid={!!errors?.name}>
            <FormLabel htmlFor='name'>Nombre</FormLabel>
            <Input type='text' {...register('name')} />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors?.age}>
            <FormLabel htmlFor='age'>Edad</FormLabel>
            <Input
              inputMode='numeric'
              type='number'
              {...register('age', { valueAsNumber: true })}
            />
            <FormErrorMessage>{errors?.age?.message}</FormErrorMessage>
          </FormControl>

          <Button type='submit'>Submit</Button>
        </Stack>
      </form>
    </Container>
  );
}

export default App;
