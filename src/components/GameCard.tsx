import { Game } from '@/hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card.Root>
            <Card.Body>
                <Image src={game.background_image} />
            </Card.Body>
            <Card.Header fontSize="2xl">
                <Heading size={"2xl"}>{game.name}</Heading>
            </Card.Header>
        </Card.Root>
    )
}

export default GameCard
