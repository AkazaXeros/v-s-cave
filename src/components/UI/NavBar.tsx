import { HStack, Image } from '@chakra-ui/react';

import logo from '../../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack padding="0.8rem">
      <Link to="/">
        <Image
          src={logo}
          boxSize="2.5rem"
          width={{ base: 'auto', md: '3rem' }}
          alt="logo"
          borderRadius={10}
          objectFit={'cover'}
        />
      </Link>
      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
