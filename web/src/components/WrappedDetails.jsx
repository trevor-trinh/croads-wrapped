import {
  Container,
  Stack,
  Text,
  Heading,
  Center,
  Button,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { HiChevronDoubleUp, HiArrowNarrowLeft } from 'react-icons/hi';
import WrappedTime from './WrappedTime';
import PictureFrame from './PictureFrame';
import Croads from '../assets/croads.jpg';
import Foothill from '../assets/foothill.jpeg';
import Cafe3 from '../assets/cafe3.jpg';
import Goldenbear from '../assets/goldenbear.jpg';
import Clarkkerr from '../assets/clarkkerr.jpg';
import OskiDrip from '../assets/OskiDrip.png';

const diningImages = {
  crossroads: Croads,
  foothill: Foothill,
  cafe3: Cafe3,
  goldenbear: Goldenbear,
  clarkkerr: Clarkkerr,
  nowhere: OskiDrip,
};

const WrappedDetails = ({
  gradientTheme,
  avgWeek,
  locations,
  timeEarly,
  timeLate,
  timeBreakfast,
  timeLunch,
  timeDinner,
  date,
}) => {
  const navigate = useNavigate();
  const parsedLocations =
    Object.keys(locations).length === 0 && locations.constructor === Object
      ? [
          ['nowhere', 0],
          ['nowhere', 0],
          ['nowhere', 0],
        ]
      : Object.entries(locations).sort(([, a], [, b]) => b - a);

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
      <Container maxW={'6xl'} minH={'95vh'} pb={'calc(100vw * 0.09719)'}>
        <Button
          leftIcon={<HiArrowNarrowLeft />}
          mt={6}
          onClick={() => navigate('/wrapped', { state: { date: date } })}
        >
          Back
        </Button>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
        >
          <BigText>
            Each week, you used an average of <br />
            <BigColor>{avgWeek} meal swipes</BigColor>
          </BigText>
        </Stack>

        <Stack>
          <BigText>Most of these were used at . . .</BigText>

          <Center pt={4}>
            <PictureFrame
              w={'lg'}
              alt={parsedLocations[0][1]}
              src={
                diningImages[
                  parsedLocations[0][0].toLowerCase().replace(/\s/g, '')
                ]
              }
            />
          </Center>

          <BigText textAlign="right">
            . . . <BigColor>{parsedLocations[0][0]}</BigColor>!
          </BigText>

          <SmallText textAlign="right">
            You ate here {parsedLocations[0][1]} times
          </SmallText>

          <BigText>As for the runner-ups, </BigText>

          <Flex align={'end'} pt={2}>
            <PictureFrame
              w={'md'}
              alt={parsedLocations[1][1]}
              src={
                diningImages[
                  parsedLocations[1][0].toLowerCase().replace(/\s/g, '')
                ]
              }
            />
            <Spacer />
            <SmallText pb={10}>
              You ate at <SmallColor>{parsedLocations[1][0]}</SmallColor>{' '}
              {parsedLocations[1][1]} times . . .
            </SmallText>
            <Spacer />
          </Flex>

          <Flex align={'end'} pt={2}>
            <Spacer />
            <SmallText>
              . . . and at <SmallColor>{parsedLocations[2][0]}</SmallColor>{' '}
              {parsedLocations[2][1]} times.
            </SmallText>
            <Spacer />

            <PictureFrame
              w={'sm'}
              alt={parsedLocations[2][1]}
              src={
                diningImages[
                  parsedLocations[2][0].toLowerCase().replace(/\s/g, '')
                ]
              }
            />
          </Flex>
        </Stack>
      </Container>
      <WrappedTime
        timeEarly={timeEarly}
        timeLate={timeLate}
        timeBreakfast={timeBreakfast}
        timeLunch={timeLunch}
        timeDinner={timeDinner}
      />
      <Center pb={{ base: 10, md: 12 }}>
        <Button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
          rightIcon={<HiChevronDoubleUp />}
        >
          Back to Top
        </Button>
      </Center>
    </>
  );
};

export default WrappedDetails;
