import { Game } from "../hooks/useGames";
import {
  Button,
  Card,
  CardBody,
  Collapse,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import React from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  //Heading minHeight={100} can make card height same even for longer names
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>

        <Collapse startingHeight={30} in={show}>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Collapse>

        <HStack justifyContent="space-between">
          <Button size="sm" onClick={handleToggle} mt="1rem">
            Show {show ? "Less" : "More"}
          </Button>

          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
