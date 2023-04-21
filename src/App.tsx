import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack
} from '@chakra-ui/react';

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
