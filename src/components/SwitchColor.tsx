import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'


export const SwitchColor = () => {
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack>
        <Switch isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
        <Text whiteSpace={'nowrap'}>Dark Mode</Text>
    </HStack>
  )
}
