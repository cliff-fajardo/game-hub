import { Game } from '@/hooks/useGames'
import { Card, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconLists from './PlatformIconLists'
import CriticScore from './CriticScore'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root borderRadius={'4px'}>
            <Image src={game.background_image} />
            <Card.Body>
                <Heading size={"2xl"}>{game.name}</Heading>

                <HStack justifyContent={'space-between'}>
                    <PlatformIconLists platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard
