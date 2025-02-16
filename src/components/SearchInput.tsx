import { Input, InputElement } from '@chakra-ui/react'
import { InputGroup } from "@/components/ui/input-group"
import { BsSearch } from 'react-icons/bs'
import { useRef } from 'react'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {

    const ref = useRef<HTMLInputElement>(null);


    return (
        <form onSubmit={(event) => {
            event.preventDefault(); //prevent form submission to server
            if (ref.current) onSearch(ref.current.value);
        }} style={{ flex: 1 }}>
            <InputGroup width="100%" paddingRight={5} startElement={<BsSearch />}>
                <Input width="100%" size={'lg'} ref={ref} borderRadius={20} variant={'subtle'} placeholder='Search games...' />
            </InputGroup>
        </form>
    )
}

export default SearchInput
