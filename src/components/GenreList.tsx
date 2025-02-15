import useGenres from '@/hooks/useGenres'
import getCroppedImageUrl from '@/services/images-url';
import { HStack, List, Text, Image, Spinner } from '@chakra-ui/react';

const GenreList = () => {

    const { data, isLoading, error } = useGenres();

    if (isLoading) return <Spinner />;

    if (error) return null;

    return (
        <List.Root>
            {data.map((genre) => (
                <List.Item key={genre.id} paddingY='5px' listStyleType={'none'}>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </List.Item>))}

        </List.Root>
    )
}

export default GenreList
