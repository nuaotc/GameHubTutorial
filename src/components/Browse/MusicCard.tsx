import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import {
  Button,
  Card,
  CardBody,
  Collapse,
  Heading,
  HStack,
  VStack,
  Text,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import "./MusicCard.css";
import { Link } from "react-router-dom";

export interface Music {
  id: number;
  name: string;
  image: string;
  year: number;
  composer: string;
  genre: number;
  level: number;
  key: string;
  notes: string[];
}

interface Props {
  music: Music;
}

const iconMap: { [key: number]: IconType } = {
  1: BsStar,
  2: BsStarHalf,
  3: BsStarFill,
};

const MusicCard = ({ music }: Props) => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <Card
      variant={{ base: "outline", md: "filled" }}
      borderWidth={{ base: "3px", md: "0px" }}
    >
      <div className="image-container">
        <Link
          to={`/play`}
          state={{ noteSequence: music.notes, keySignature: music.key }}
        >
          <img src={music.image} alt={music.name} className="image" />
          <div className="overlay">Play</div>
        </Link>
      </div>
      <CardBody>
        <Heading marginBottom={3} fontSize="xl">
          {music.name}
        </Heading>

        <Collapse startingHeight={0} in={show}>
          <VStack align="stretch" spacing={1}>
            <HStack>
              <Text color="gray.400">Composer:</Text>
              <Spacer />
              <Text>{music.composer}</Text>
            </HStack>
            <HStack>
              <Text color="gray.400">Year Released:</Text>
              <Spacer />
              <Text>{music.year}</Text>
            </HStack>
            <HStack>
              <Text color="gray.400">Difficulty Level:</Text>
              <Spacer />
              <Text>
                {music.level === 1
                  ? "Beginner"
                  : music.level === 2
                  ? "Intermediate"
                  : "Master"}
              </Text>
            </HStack>
          </VStack>
        </Collapse>

        <HStack justifyContent="space-between">
          <Button size="sm" onClick={handleToggle} marginTop={2}>
            Show {show ? "Less" : "More"}
          </Button>

          <Icon boxSize={6} key={music.id} as={iconMap[music.level]} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MusicCard;
