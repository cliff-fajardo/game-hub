import { Platform } from '@/hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows, FaXbox, FaPlaystation, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface Props {
    platforms: Platform[]
}

const PlatformIconLists = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        nintendo: SiNintendo,
        web: BsGlobe
    }
    return (
        <HStack>
            {platforms.map((platform) =>
                <Icon as={iconMap[platform.slug]} color={'gray.500'} />
            )}
        </HStack>
    )
}

export default PlatformIconLists
