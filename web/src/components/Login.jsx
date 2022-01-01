import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useToast,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import OskiL from '../images/OskiL.jpg';

const Login = ({ setData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const toastIdRef = useRef();

  const onSubmit = async e => {
    e.preventDefault();
    const form = e.target.elements;

    setIsLoading(true);
    toastIdRef.current = toast({
      title: 'Loading...',
      description: 'Please check Duo Mobile (takes a bit)',
      status: 'warning',
      variant: 'left-accent',
      position: 'top',
      isClosable: true,
      duration: null,
    });

    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({
        calid: form.calid.value,
        password: form.password.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const resJson = await res.json();

    if (res.ok) {
      toast.update(toastIdRef.current, {
        title: 'Success:',
        description: 'Logged In!',
        status: 'success',
        variant: 'left-accent',
        position: 'top',
        isClosable: true,
        duration: 3000,
      });

      setData(resJson);
    } else {
      const errMsg = resJson.error;
      setIsLoading(false);
      toast.update(toastIdRef.current, {
        title: 'Error:',
        description: `${errMsg} Please try again.`,
        status: 'error',
        variant: 'left-accent',
        position: 'top',
        isClosable: true,
        duration: 3000,
      });
    }
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1}>
        <Image alt={'Login Image'} objectFit={'cover'} src={OskiL} />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack
          as={'form'}
          onSubmit={onSubmit}
          spacing={4}
          w={'full'}
          maxW={'md'}
        >
          <Heading fontSize={'2xl'}>Sign in to your Cal account</Heading>

          <Stack spacing={4} w={'full'} maxW={'md'}>
            <FormControl id="calid">
              <FormLabel>CalNet ID</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <Checkbox isRequired>
              I agree to the{' '}
              <Link color={'blue.500'} href="#" target="_blank">
                terms & conditions
              </Link>
            </Checkbox>

            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, red.400,pink.400)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
              }}
              type="submit"
              isLoading={isLoading}
            >
              Log in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Login;
