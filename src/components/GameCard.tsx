import { Game } from '@/hooks/useGames'
import { Card, Heading, Image } from '@chakra-ui/react'
import PlatformIconLists from './PlatformIconLists'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root>
            <Card.Body>
                <Image src={game.background_image} />
                <Heading size={"2xl"}>{game.name}</Heading>
            </Card.Body>

            <Card.Footer>

                <PlatformIconLists platforms={game.parent_platforms.map(p => p.platform)} />
            </Card.Footer>
        </Card.Root>
    )
}

export default GameCard
