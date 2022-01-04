import { Container, Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import DateCard from '../components/DateCard';
import { useEffect } from 'react';
import { cardDateData } from '../utils/data';

const HomePage = ({ username }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Container maxW={'5xl'} minH={'95vh'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          fontWeight={{ base: 'bold', md: 'extrabold' }}
          lineHeight={'110%'}
        >
          {username.split(' ')[0]}, your{' '}
          <Text
            as={'span'}
            bgClip="text"
            bgGradient="linear(to-r, #3B7EA1, #FDB515)"
          >
            Croads Wrapped
          </Text>{' '}
          is ready!
        </Heading>
        <Text
          color={'gray.500'}
          maxW={'3xl'}
          fontSize={{ base: 'lg', md: 'xl' }}
        >
          Go Bears! Croads is definitely #1 in terms of overall dining
          experience 😉. Try opening the console if you're curious, or just
          click a semester to get started!
        </Text>
        <Container maxW={'4xl'}>
          <SimpleGrid columns={[1, null, 2]} w={'full'} spacing={12}>
            {cardDateData
              .sort((a, b) => b.dateRange.start - a.dateRange.start)
              .map(cardProps => (
                <DateCard {...cardProps} key={cardProps.semester} />
              ))}
          </SimpleGrid>
        </Container>
      </Stack>
    </Container>
  );
};

export default HomePage;
