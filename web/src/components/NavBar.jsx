import {
  Box,
  Avatar,
  useColorModeValue,
  Stack,
  Container,
  HStack,
  IconButton,
  Center,
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
  Text,
  Icon,
  Divider,
  useDisclosure,
  Collapse,
} from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import {
  HiLogout,
  HiOutlineCurrencyDollar,
  HiOutlineCreditCard,
} from 'react-icons/hi';
import NavLogo from './NavLogo';
import { useEffect, useState } from 'react';
import { parseData, getDateRange } from '../utils/data';
import { VscFeedback, VscGithub } from 'react-icons/vsc';

const Nav = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure();

  // for if ever can change nav bar date
  const [date, setDate] = useState(new Date());
  const [username, setUsername] = useState();
  const [flexBal, setFlexBal] = useState();
  const [swipesBal, setSwipesBal] = useState();
  const [weekStart, setWeekStart] = useState();

  useEffect(() => {
    const { swipeDatum } = parseData(data, date);
    setUsername(data['username']);

    setFlexBal(
      data['On-Campus Meal Plan Flex Dollars Activity'][0]['New Balance'],
    );
    setSwipesBal(swipeDatum.thisWeek);

    setWeekStart(
      getDateRange(date, 'week').start.toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    );

    // temp until more is done, also for whoever's curious
    window.setNavDate = dateum => setDate(dateum);
  }, [data, date]);

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <NavLogo />

        <HStack spacing={6}>
          <HStack spacing={3}>
            <IconButton icon={<Icon as={CalendarIcon} />} onClick={onToggle} />
            <Collapse in={isOpen} animateOpacity>
              <HStack spacing={3}>
                <Text>Week of: {weekStart}</Text>
                <Divider orientation="vertical" />

                <Icon as={HiOutlineCreditCard} w={5} h={5} />
                <Text>Meal Swipes Used: {swipesBal}</Text>
                <Divider orientation="vertical" />

                <Icon as={HiOutlineCurrencyDollar} w={5} h={5} />
                <Text>Flex Dollar Balance: {flexBal}</Text>
              </HStack>
            </Collapse>
          </HStack>
          <Box>
            <Menu autoSelect={false}>
              <MenuButton>
                <Avatar name={username} size={'sm'} />
              </MenuButton>
              <MenuList>
                <Center py={2} fontWeight={'semibold'}>
                  {username}
                </Center>
                <MenuItem
                  icon={<VscFeedback />}
                  onClick={() =>
                    window.open('https://forms.gle/Bqxd8jXsBc9E4HrC8', '_blank')
                  }
                >
                  Feedback
                </MenuItem>
                <MenuItem
                  icon={<VscGithub />}
                  onClick={() =>
                    window.open(
                      'https://github.com/trevor-trinh/croads-wrapped',
                      '_blank',
                    )
                  }
                >
                  Github Repo
                </MenuItem>

                <MenuItem
                  icon={<HiLogout color="red" />}
                  onClick={() => window.location.reload()}
                >
                  Log Out
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default Nav;
