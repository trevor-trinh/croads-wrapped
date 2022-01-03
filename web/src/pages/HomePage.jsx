import { Container, Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import DateCard from '../components/DateCard';
import { getRange } from '../utils/swipes';
import { useEffect } from 'react';

// TODO: hardcoded date ranges right now
const dateData = [
  {
    semester: 'Fall 2021',
    date: new Date(2021, 7, 18),
    dateRange: getRange(new Date(2021, 7, 18), 'semester'),
    image:
      'https://images.unsplash.com/photo-1574125053225-146d962568ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  },
  {
    semester: 'Spring 2022',
    date: new Date(2022, 0, 11),
    dateRange: getRange(new Date(2022, 0, 11), 'semester'),
    image:
      'https://www.visitcalifornia.com/sites/visitcalifornia.com/files/VC_SpotlightBerkeley_Hero_Stock_RF_149303390_1280x640.jpg',
  },
];

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
          Here's some random text. Not really sure what to put here. Maybe
          something funny. Should get an English major to help with this part.
        </Text>
        <Container maxW={'4xl'}>
          <SimpleGrid columns={[1, null, 2]} w={'full'} spacing={12}>
            {dateData
              .sort((a, b) => b.date - a.date)
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
