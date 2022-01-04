import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import NavLogo from './NavLogo';

const Footer = () => {
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

        <Text>
          Made with 💖 by{' '}
          <Link
            href="https://trevz.me"
            isExternal
            _hover={{
              textDecoration: 'none',
            }}
          >
            Trevor
          </Link>
        </Text>
        <HStack spacing={6}>
          <SocialButton
            label={'Github'}
            href={'https://github.com/trevor-trinh'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaGithub} />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://instagram.com/trevortrinh'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaInstagram} />
          </SocialButton>
          <SocialButton
            label={'LinkedIn'}
            href={'https://www.linkedin.com/in/trevortrinh/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FaLinkedin} />
          </SocialButton>
        </HStack>
      </Container>
    </Box>
  );
};

const SocialButton = ({ children, label, href, rel, target }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      rel={rel}
      target={target}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default Footer;
