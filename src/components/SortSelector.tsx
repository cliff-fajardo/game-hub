import { Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, } from "@/components/ui/menu"

const SortSelector = () => {
    return (
        <MenuRoot positioning={{ placement: "top" }}>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Order By: Relevance <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                <MenuItem value='relevance'>Relevance</MenuItem>
                <MenuItem value='date'>Date Added</MenuItem>
                <MenuItem value='name'>Name</MenuItem>
                <MenuItem value='releasedate'>Release Date</MenuItem>
                <MenuItem value='popularity'>Popularity</MenuItem>
                <MenuItem value='avgrating'>Average Rating</MenuItem>
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector
