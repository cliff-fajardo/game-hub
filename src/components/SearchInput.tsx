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
        }}>
            <InputGroup flex={1} startElement={<BsSearch />}>
                <Input size={'lg'} style={{ width: '100%' }} ref={ref} borderRadius={20} variant={'subtle'} placeholder='Search games...' />
            </InputGroup>
        </form>
    )
}

export default SearchInput
