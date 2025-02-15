
import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {

    const { data, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 5 }} padding={"10px"} gap={"10px"}>
                {isLoading && skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
                {
                    data.map((g) => {
                        return (
                            <GameCardContainer key={g.id}>
                                <GameCard game={g} />
                            </GameCardContainer>
                        );
                    })}
            </SimpleGrid>
        </>
    )
}

export default GameGrid
