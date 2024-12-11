import { HStack, Image } from '@chakra-ui/react';

import logo from '../../assets/logo.jpg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding="0.8rem">
      <Image src={logo} boxSize="2.5rem" alt="logo" borderRadius={10} />
      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
