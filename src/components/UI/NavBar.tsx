import { HStack, Image } from '@chakra-ui/react';

import logo from '../../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

type Props = {
  onSearchSubmit: (value: string) => void;
};

const NavBar = ({ onSearchSubmit }: Props) => {
  return (
    <HStack padding="0.8rem">
      <Image src={logo} boxSize="3.75rem" alt="logo" />
      <SearchInput onSearchSubmit={onSearchSubmit} />

      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
