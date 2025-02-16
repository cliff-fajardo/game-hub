import { Input, InputElement } from '@chakra-ui/react'
import { InputGroup } from "@/components/ui/input-group"
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
    return (
        <InputGroup flex={1} startElement={<BsSearch />}>
            <Input borderRadius={20} variant={'subtle'} placeholder='Search games...' />
        </InputGroup>
    )
}

export default SearchInput
