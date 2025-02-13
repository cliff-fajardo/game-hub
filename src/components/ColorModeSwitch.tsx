import { HStack, Text } from '@chakra-ui/react'
import { Switch } from "@/components/ui/switch"
import { useColorMode } from './ui/color-mode'

const ColorModeSwitch = () => {

    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <HStack>
            <Switch checked={colorMode === 'dark'} onChange={toggleColorMode} />
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColorModeSwitch
