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

// TODO: make mobile friendly
export default function Nav({ username, flexBal, swipesBal, weekStart }) {
  const { isOpen, onToggle } = useDisclosure();

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
          {/* TODO: try adding framer mation again later, but collapse good enuf */}
          <HStack spacing={3}>
            <IconButton icon={<Icon as={CalendarIcon} />} onClick={onToggle} />
            <Collapse in={isOpen} animateOpacity>
              <HStack spacing={3}>
                <Text>
                  {/* TODO: add something to change the currentDate, might need different reference for the navbar and the wrapped section */}
                  Week of:{' '}
                  {weekStart.toLocaleDateString(navigator.language, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </Text>
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
}
