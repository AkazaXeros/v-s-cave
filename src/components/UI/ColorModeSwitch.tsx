import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

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
      />
      <Text whiteSpace="nowrap">{text} Mode</Text>
    </HStack>
  );
};
export default ColorModeSwitch;
