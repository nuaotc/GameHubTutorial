import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import homePic from "../assets/home.png";

import musics from "./Browse/data/musics";
import { Music } from "./Browse/MusicCard";

const Home = () => {
  const tryMusic: Music =
    musics.find((item) => item.name === "Mary Had a Little Lamb") ?? musics[0];

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
            noteSequence: tryMusic.notes,
            keySignature: tryMusic.key,
          }}
        >
          <Button
            backgroundColor={"blue.300"}
            color={"black"}
            fontWeight={"bold"}
            _hover={{ bg: "white" }}
          >
            Play now
          </Button>
        </Link>
        <Link to="/browse">
          <Button
            backgroundColor={"blue.300"}
            color={"black"}
            fontWeight={"bold"}
            _hover={{ bg: "white" }}
          >
            Browse collection
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Home;
