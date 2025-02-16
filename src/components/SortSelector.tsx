import { Button } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, } from "@/components/ui/menu"

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

    const sortOrders = [
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Released Date' },
        { value: '-added', label: 'Date Added' },
        { value: '-created', label: 'Date Created' },
        { value: '-updated', label: 'Date Updated' },
        { value: '-rating', label: 'Average Rating' },
        { value: '-metacritic', label: 'Popularity' },
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <MenuRoot positioning={{ placement: "top" }}>
            <MenuTrigger asChild>
                <Button variant="outline" size="sm">
                    Order By: {currentSortOrder?.label || 'Relevance'} <BsChevronDown />
                </Button>
            </MenuTrigger>
            <MenuContent>
                {sortOrders.map((order) => (
                    <MenuItem key={order.value} onClick={() => onSelectSortOrder(order.value)} value={order.value}>{order.label}</MenuItem>
                ))}
            </MenuContent>
        </MenuRoot>
    )
}

export default SortSelector
