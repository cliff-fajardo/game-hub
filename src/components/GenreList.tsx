import useGenres, { Genre } from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/images-url';
import { HStack, List, Text, Image, Spinner, Button, Link } from '@chakra-ui/react';

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {

    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <List.Root>
            {data.map((genre) => (
                <List.Item key={genre.id} paddingY='5px' listStyleType={'none'}>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant={'plain'} onClick={() => onSelectedGenre(genre)} fontSize='lg'>{genre.name}</Button>
                    </HStack>
                </List.Item>))}

        </List.Root>
    )
}

export default GenreList
