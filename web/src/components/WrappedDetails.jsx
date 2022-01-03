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
import { HiChevronDoubleUp } from 'react-icons/hi';
import WrappedTime from './WrappedTime';
import PictureFrame from './PictureFrame';

const diningImages = {
  crossroads:
    'https://i2.wp.com/www.dailycal.org/assets/uploads/2016/11/patz_mikaelaRaphael_staff.jpg?ssl=1&w=900',
  foothill: 'https://miro.medium.com/max/700/1*JnS1SIM-a63KmnTTrYZVog.jpeg',
  cafe3:
    'https://news.berkeley.edu/wp-content/uploads/2016/08/kosher-and-halal-cafe.jpg',
  goldenbear:
    'https://s3.amazonaws.com/spoonuniversi-wpengine/spoonuniversi/wp-content/uploads/sites/23/2016/03/DSC_0018-1024x682.jpg',
  clarkkerr:
    'https://fastly.4sqi.net/img/general/600x600/356361_2_I2KCe4fu434tTPL7-uk_Wx0iLanCS3p5Lx2XFYeYM.jpg',
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
  swipesAvg,
}) => {
  const parsedLocations =
    Object.keys(locations).length === 0 && locations.constructor === Object
      ? [
          ['Crossroads', 0],
          ['Crossroads', 0],
          ['Crossroads', 0],
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
