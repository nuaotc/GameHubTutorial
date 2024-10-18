import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import homePic from "../assets/home.png";
import noteA1 from "../assets/audio/notes/02A1.m4a";
import musics from "./Browse/data/musics";
import { Music } from "./Browse/MusicCard";

const Home = () => {
  const playSound = () => {
    const audio = new Audio(noteA1);
    audio.volume = 0.2;
    audio.play();
  };

  const music: Music = musics[12];

  return (
    <VStack mx={"auto"} mt={10}>
      <Image
        src={homePic}
        maxWidth={{ base: "250px", sm: "300px", md: "450px" }}
        mx="auto"
        marginTop={10}
      />
      <HStack mt={10}>
        <Link
          to="/play"
          state={{
            noteSequence: music.notes,
          }}
        >
          <Button
            backgroundColor={"blue.300"}
            color={"black"}
            fontWeight={"bold"}
            _hover={{ bg: "white" }}
            onClick={playSound}
          >
            Try now
          </Button>
        </Link>
        <Link to="/play">
          <Button
            backgroundColor={"blue.300"}
            color={"black"}
            fontWeight={"bold"}
            _hover={{ bg: "white" }}
            onClick={playSound}
          >
            Browse collection
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Home;
