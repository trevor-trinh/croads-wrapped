import {
  Container,
  Stack,
  Text,
  Heading,
  SimpleGrid,
  Button,
  Center,
  HStack,
} from '@chakra-ui/react';
import WrappedTime from './WrappedTime';

const WrappedDetails = ({ avgWeek, gradientTheme }) => {
  const formatTime = date =>
    date.toLocaleTimeString(navigator.language, {
      hour: 'numeric',
      minute: 'numeric',
    });

  const BigColor = props => (
    <Text
      as={'span'}
      bgClip="text"
      bgGradient={gradientTheme}
      fontSize={'150%'}
      fontWeight={'bold'}
      {...props}
    />
  );

  const BigText = props => (
    <Heading
      fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
      fontWeight={'medium'}
      lineHeight={'200%'}
      {...props}
    />
  );

  const SmallText = props => (
    <Heading
      fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
      fontWeight={'minibold'}
      {...props}
    />
  );

  const SmallColor = props => (
    <Text
      as={'span'}
      bgClip="text"
      bgGradient={gradientTheme}
      fontWeight={'bold'}
      fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
      {...props}
    />
  );

  return (
    <>
      <Container maxW={'6xl'} minH={'95vh'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 12, md: 16 }}
        >
          <BigText>
            Each week, you used an average of <br />
            <BigColor>{avgWeek} meal swipes</BigColor>
          </BigText>
        </Stack>

        <BigText>Most of these were used at . . .</BigText>

        <Center>
          {/* TODO: image border custom component */}
          <Text>IMAGE HERE</Text>
        </Center>

        <BigText textAlign="right">
          . . . <BigColor>Crossroads</BigColor>!
        </BigText>

        <SmallText textAlign="right">You ate here 114 times</SmallText>

        <BigText>As for the runner-ups, </BigText>

        <HStack>
          <Text>IMAGE HERE</Text>
          <SmallText>
            You ate at <SmallColor>Clark Kerr</SmallColor> 12 times
          </SmallText>
        </HStack>

        <HStack>
          <SmallText>
            . . . and at <SmallColor>Cafe 3</SmallColor> 2 times.
          </SmallText>
          <Text>IMAGE HERE</Text>
        </HStack>
      </Container>
      <WrappedTime />
    </>
  );
};

export default WrappedDetails;
