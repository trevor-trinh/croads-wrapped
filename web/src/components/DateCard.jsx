import {
  Stack,
  Text,
  Heading,
  LinkBox,
  Box,
  LinkOverlay,
  Center,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const DateCard = ({ date, image, semester, dateRange }) => {
  const formatDate = dateum =>
    dateum.toLocaleDateString(navigator.language, {
      month: 'long',
      day: 'numeric',
    });

  return (
    <LinkBox>
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={330}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={230}
            _after={{
              transition: 'all .2s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(30px)',
              },
            }}
          >
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
              fontWeight={'semibold'}
            >
              {formatDate(dateRange.start)} - {formatDate(dateRange.end)}
            </Text>

            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              <LinkOverlay as={Link} to="/wrapped" state={{ date: date }}>
                {semester}
              </LinkOverlay>
            </Heading>
          </Stack>
        </Box>
      </Center>
    </LinkBox>
  );
};

export default DateCard;
