import { HStack, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import OskiDrip from '../assets/OskiDripCropped.png';

const NavLogo = () => {
  let navigate = useNavigate();

  return (
    <NavLink onClick={() => navigate('/')}>
      <HStack>
        <Image src={OskiDrip} boxSize={9} borderRadius={'full'} />
        <Text lineHeight={'none'} fontWeight={'extrabold'} fontSize={'125%'}>
          wrapped
        </Text>
      </HStack>
    </NavLink>
  );
};

export const NavLink = props => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    {...props}
  />
);

export default NavLogo;
