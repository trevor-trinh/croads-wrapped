import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  Spacer,
} from '@chakra-ui/react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import OskiDrip from '../assets/OskiDrip.png';
import Footer from '../components/Footer';

const LoginPage = ({ setData }) => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const toastIdRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    const form = e.target.elements;
    toast.closeAll();

    setIsLoading(true);
    toastIdRef.current = toast({
      title: 'Loading...',
      description: 'Please check Duo Mobile (may take a while)',
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
      navigate('/');
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
    <>
      <HStack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Spacer />
        <Flex flex={1}>
          <Image alt={'Login Image'} objectFit={'cover'} src={OskiDrip} />
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
                <Button color={'blue.500'} variant={'link'} onClick={onOpen}>
                  terms & conditions
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>We have no legal team (❁´◡`❁) </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody textAlign={'center'} pb={4}>
                      Use this website for fun! We take no responsibility for
                      anything bad (＞︿＜) ! We don't collect any information,
                      feel free to check our source code!
                      <br />
                      <br />
                      Thank you! Enjoy the site and have a nice day!
                      <br />
                      (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button
                        variant={'ghost'}
                        rightIcon={<ExternalLinkIcon />}
                        onClick={() =>
                          window.open(
                            'https://github.com/trevor-trinh/croads-wrapped',
                            '_blank',
                          )
                        }
                      >
                        Github Repo
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
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
        <Spacer />
      </HStack>
      <Footer />
    </>
  );
};

export default LoginPage;
