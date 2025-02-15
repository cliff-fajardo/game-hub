import { Platform } from '@/hooks/useGames';
import usePlatforms from '@/hooks/usePlatforms';
import { Button, MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'


interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {

    const { data, error } = usePlatforms();

    if (error) return null;

    return (
        <MenuRoot positioning={{ placement: "bottom" }}>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    {selectedPlatform?.name || 'Platform'} <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent maxWidth={250}>
                {data.map((platform) => (
                    <MenuItem key={platform.id} value={platform.name} onClick={() => onSelectedPlatform(platform)}>{platform.name}</MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default PlatformSelector
