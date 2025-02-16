import { Flex, HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <Flex padding="10px">
            <Image src={logo} boxSize="60px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </Flex>
    )
}

export default NavBar
