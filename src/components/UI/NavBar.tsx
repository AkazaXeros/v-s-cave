import { HStack, Image } from '@chakra-ui/react';

import logo from '../../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding="0.8rem">
      <Image src={logo} boxSize="3.75rem" />
      <SearchInput />

      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
