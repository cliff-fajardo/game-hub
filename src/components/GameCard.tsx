import { Game } from '@/hooks/useGames'
import { Card, Heading, HStack, Image } from '@chakra-ui/react'
import PlatformIconLists from './PlatformIconLists'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '@/services/images-url'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {

    return (
        <Card.Root>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <Card.Body>

                <HStack justifyContent={'space-between'}>
                    <PlatformIconLists platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading size={"2xl"}>{game.name}</Heading>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard
