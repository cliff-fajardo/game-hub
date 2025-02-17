import { GameQuery } from '@/App'
import { Heading } from '@chakra-ui/react'
import React from 'react'

interface Props {
    gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {

    const heading = `${gameQuery.platforms?.name || ''} ${gameQuery.genre?.name || ''} Games`;

    return (
        <Heading as='h1' marginBottom={5} fontSize={'4xl'}>{heading}</Heading>
    )
}

export default GameHeading
