import {
  Container,
  Stack,
  Text,
  Heading,
  Center,
  HStack,
  Button,
  Flex,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { HiChevronDoubleUp } from 'react-icons/hi';
import WrappedTime from './WrappedTime';
import PictureFrame from './PictureFrame';

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
              alt="croads"
              src="https://i2.wp.com/www.dailycal.org/assets/uploads/2016/11/patz_mikaelaRaphael_staff.jpg?ssl=1&w=900"
            />
          </Center>

          <BigText textAlign="right">
            . . . <BigColor>Crossroads</BigColor>!
          </BigText>

          <SmallText textAlign="right">You ate here 114 times</SmallText>

          <BigText>As for the runner-ups, </BigText>

          <Flex align={'end'} pt={2}>
            <PictureFrame
              w={'md'}
              alt="croads"
              src="https://i2.wp.com/www.dailycal.org/assets/uploads/2016/11/patz_mikaelaRaphael_staff.jpg?ssl=1&w=900"
            />
            <Spacer />
            <SmallText pb={10}>
              You ate at <SmallColor>Clark Kerr</SmallColor> 12 times . . .
            </SmallText>
            <Spacer />
          </Flex>

          <Flex align={'end'} pt={2}>
            <Spacer />
            <SmallText>
              . . . and at <SmallColor>Cafe 3</SmallColor> 2 times.
            </SmallText>
            <Spacer />

            <PictureFrame
              w={'sm'}
              alt="croads"
              src="https://i2.wp.com/www.dailycal.org/assets/uploads/2016/11/patz_mikaelaRaphael_staff.jpg?ssl=1&w=900"
            />
          </Flex>
        </Stack>
      </Container>
      <WrappedTime />
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
