import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { MdWbSunny } from 'react-icons/md';
import { LuMoon } from 'react-icons/lu';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const text = `${colorMode.slice(0, 1).toUpperCase()}${colorMode.slice(1)}`;

  return (
    <HStack>
      <Switch
        id="theme"
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        hidden={true}
      />
      <Text whiteSpace="nowrap" onClick={toggleColorMode}>
        {text === 'Dark' ? <MdWbSunny /> : <LuMoon />}
      </Text>
    </HStack>
  );
};
export default ColorModeSwitch;
