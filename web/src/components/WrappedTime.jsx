import {
  Container,
  Heading,
  SimpleGrid,
  Center,
  Box,
  VStack,
} from '@chakra-ui/react';
import MealTimeCard from './MealTimeCard';

const mealTimeData = [
  {
    meal: 'Breakfast',
    time: '8:00 AM',
    image:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    meal: 'Lunch',
    time: '12:00 PM',
    image:
      'https://images.unsplash.com/photo-1611520189922-f7b1ba7d801e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNoaW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    meal: 'Dinner',
    time: '6:00 PM',
    image:
      'https://images.unsplash.com/photo-1614104030967-5ca61a54247b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90cG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const WrappedTime = () => {
  return (
    <>
      <Box
        // changed behaviors cuz css sucks lmao
        bgGradient={
          'linear-gradient(360deg, #9795ef, #b591e9, #ce8de0, #e38ad4, #f489c7, #ff89b8, #ff8ca8, #ff9199, #ff988a, #ffa17d, #ffab73, #ffb56b)'
        }
        w={'full'}
        transform={'skewY(-11deg)'}
        padding={'calc(100vw * 0.09719) 0'}
      >
        <Container maxW={'6xl'} transform={'skewY(11deg)'}>
          <VStack
            textAlign={'center'}
            align={'center'}
            fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
            py={{ base: 20, md: 28 }}
          >
            <VStack spacing={{ base: 4, md: 7 }} pb={'50vh'}>
              <Heading fontWeight={'medium'} color={'white'} fontSize={'88%'}>
                Your earliest meal was at
              </Heading>
              <Heading
                fontSize={'450%'}
                fontWeight={'minibold'}
                color={'white'}
              >
                7:49 AM
              </Heading>
            </VStack>

            <VStack spacing={{ base: 4, md: 7 }} pb={'calc(100vw * 0.09719)'}>
              <Heading fontWeight={'medium'} color={'white'} fontSize={'88%'}>
                and your latest meal was at
              </Heading>
              <Heading
                fontSize={'450%'}
                fontWeight={'minibold'}
                color={'white'}
              >
                8:21 PM
              </Heading>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <Box mt={'calc(100vw * 0.09719)'}>
        <Container maxW={'6xl'}>
          <VStack
            as={Center}
            pb={{ base: 14, md: 20 }}
            spacing={{ base: 12, md: 14 }}
          >
            <Heading
              fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
              fontWeight={'medium'}
              lineHeight={'200%'}
            >
              Here's how you ate on a typical day.
            </Heading>

            <SimpleGrid columns={[1, 1, 1, 3]} w={'full'} spacing={12}>
              {/* line where the meal shows up based on the time between earliest and latest */}
              {/* but three cards is so much easier for now */}
              {mealTimeData.map(cardProps => (
                <MealTimeCard {...cardProps} key={cardProps.meal} />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default WrappedTime;
