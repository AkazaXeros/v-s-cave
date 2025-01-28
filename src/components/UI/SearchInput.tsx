import { Box, HStack, Image } from '@chakra-ui/react';

import logo from '../../assets/logo.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack padding="0.8rem">
      <Box flex={{ base: 1, md: 0.5, lg: '10%' }}>
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
      </Box>
      <Box flex={{ base: 4, lg: '80%' }}>
        <SearchInput />
      </Box>

      <Box
        flex={{ sm: 0.5, md: 1, lg: '10%' }}
        marginLeft={{ sm: 10, md: 15, lg: 20 }}
      >
        <ColorModeSwitch />
      </Box>
    </HStack>
  );
};
export default NavBar;
