import usePlatforms from '@/hooks/usePlatforms';
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const PlatformSelector = () => {

    const { data, error } = usePlatforms();

    if (error) return null;

    return (
        <MenuRoot positioning={{ placement: "bottom" }}>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Platform <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent maxWidth={250}>
                {data.map((platform) => (
                    <MenuItem key={platform.id} value={platform.name}>{platform.name}</MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector
