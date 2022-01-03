import { Text, Image, Box, useColorModeValue, chakra } from '@chakra-ui/react';

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
        display="block"
        fontSize="2xl"
        color={useColorModeValue('gray.800', 'white')}
        fontWeight="bold"
      >
        {time}
      </Text>
      <chakra.span
        fontSize="sm"
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        {meal}
      </chakra.span>
    </Box>
  </Box>
);

export default MealTimeCard;
