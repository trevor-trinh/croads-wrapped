import { Text, Image, Box, useColorModeValue } from '@chakra-ui/react';

const MealTimeCard = ({ meal, time, image }) => (
  <Box
    w="xs"
    bg={useColorModeValue('white', 'gray.800')}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
    mx="auto"
  >
    <Image w="full" h={56} fit="cover" src={image} />

    <Box py={5} textAlign="center">
      <Text
        fontSize="2xl"
        color={useColorModeValue('gray.800', 'white')}
        fontWeight="bold"
      >
        {time}
      </Text>
      <Text fontSize="sm" color={useColorModeValue('gray.700', 'gray.200')}>
        {meal}
      </Text>
    </Box>
  </Box>
);

export default MealTimeCard;
