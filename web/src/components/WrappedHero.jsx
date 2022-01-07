import { Container, Stack, Text, Heading, Button } from '@chakra-ui/react';
import { HiArrowRight, HiArrowNarrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const WrappedHero = ({ gradientTheme, semesterSwipes, setShowDetails }) => {
  const navigate = useNavigate();

  return (
    <Container maxW={'6xl'} minH={'95vh'}>
      <Button
        leftIcon={<HiArrowNarrowLeft />}
        mt={6}
        onClick={() => navigate('/')}
      >
        Back
      </Button>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 10, md: 14 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          fontWeight={'bold'}
          lineHeight={'222%'}
        >
          You used a total of <br />
          <Text
            as={'span'}
            bgClip="text"
            bgGradient={gradientTheme}
            fontSize={'200%'}
          >
            {semesterSwipes} meal swipes
          </Text>
          <br />
          this semester!
        </Heading>

        <Button
          w={'full'}
          maxW={'md'}
          h={16}
          fontSize={'x-large'}
          bgGradient={gradientTheme}
          color={'white'}
          _hover={{
            bgGradient: gradientTheme,
            boxShadow: 'xl',
          }}
          rightIcon={<HiArrowRight />}
          onClick={() => setShowDetails(true)}
        >
          Here's how you spent them
        </Button>
      </Stack>
    </Container>
  );
};

export default WrappedHero;
