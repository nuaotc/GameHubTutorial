import {
  Button,
  Collapse,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
  isCollapse: boolean;
}

//Dynamically loading the genre list and showing loading indicators can negatively impact the user experience
//It makes their eyes dart around the page
//Since the genre don't change, it should be static, and ship with the application
//no extra request need to send to the server api, the data will be available right away

const GenreList = ({ onSelectGenre, selectedGenre, isCollapse }: Props) => {
  const { data, error, isLoading } = useGenres();

  const { isOpen, onToggle } = useDisclosure();

  // showing error on different parts of the page can be confusing and unnecessary
  // but leting user know what is happening can be helpful to determine whether is the server problem or internet problem
  if (error) return null;
  if (isLoading) return <Spinner />;

  //default whitespace (textwrap) for button is no wrap
  //objectFit="cover" with this image will be scaled to fit the container while preserving aspect ratio

  if (!isCollapse)
    return (
      <>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          {data.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  color={genre.id === selectedGenre?.id ? "blue.300" : "normal"}
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );

  return (
    <>
      <Button onClick={onToggle}>Genres</Button>
      <Collapse in={isOpen} animateOpacity>
        <List>
          <HStack wrap={"wrap"}>
            {data.map((genre) => (
              <ListItem key={genre.id} paddingY="5px">
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  color={genre.id === selectedGenre?.id ? "blue.300" : "normal"}
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="outline"
                >
                  {genre.name}
                </Button>
              </ListItem>
            ))}
          </HStack>
        </List>
      </Collapse>
    </>
  );
};

export default GenreList;
