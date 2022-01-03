import { Container, Stack, Text, Heading, Button } from '@chakra-ui/react';
import { HiArrowRight } from 'react-icons/hi';

const WrappedHero = ({ gradientTheme, semesterSwipes, setShowDetails }) => (
  <Container maxW={'5xl'} minH={'95vh'}>
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

export default WrappedHero;
