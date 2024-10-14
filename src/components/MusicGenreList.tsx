import {
  Button,
  Collapse,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import musicGenres from "../data/musicGenres";
import all from "../assets/musicGenreIcons/all.png";

export interface MusicGenre {
  id: number;
  name: string;
  image: string;
}

interface Props {
  onSelectGenre: (genre: MusicGenre | null) => void;
  selectedGenre: MusicGenre | null;
  isCollapse: boolean;
}

//Dynamically loading the genre list and showing loading indicators can negatively impact the user experience
//It makes their eyes dart around the page
//Since the genre don't change, it should be static, and ship with the application
//no extra request need to send to the server api, the data will be available right away

const MusicGenreList = ({
  onSelectGenre,
  selectedGenre,
  isCollapse,
}: Props) => {
  const { isOpen, onToggle } = useDisclosure();

  // showing error on different parts of the page can be confusing and unnecessary
  // but leting user know what is happening can be helpful to determine whether is the server problem or internet problem
  // if (error) return null;
  // if (isLoading) return <Spinner />;

  //default whitespace (textwrap) for button is no wrap
  //objectFit="cover" with this image will be scaled to fit the container while preserving aspect ratio

  if (!isCollapse)
    return (
      <>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          <ListItem paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={all}
              />
              <Button
                justifyContent="flex-start"
                fontWeight={selectedGenre ? "normal" : "bold"}
                color={selectedGenre ? "normal" : "blue.300"}
                onClick={() => onSelectGenre(null)}
                fontSize="lg"
                variant="link"
              >
                All
              </Button>
            </HStack>
          </ListItem>

          {musicGenres.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={genre.image}
                />
                <Button
                  justifyContent="flex-start"
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
    //first listItem is for showing all genre, user doesn't need to refresh the page or go back to reverse selection
    <>
      <Button marginTop={7} marginBottom={2} onClick={onToggle}>
        Genres
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <List>
          <HStack wrap={"wrap"}>
            <ListItem>
              <Button
                fontWeight={selectedGenre ? "normal" : "bold"}
                color={selectedGenre ? "normal" : "blue.300"}
                onClick={() => onSelectGenre(null)}
                fontSize="lg"
                variant="outline"
              >
                All
              </Button>
            </ListItem>

            {musicGenres.map((genre) => (
              <ListItem key={genre.id}>
                <Button
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

export default MusicGenreList;
