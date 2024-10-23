import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import homePic from "../assets/home.png";

import musics from "./Browse/data/musics";
import { Music } from "./Browse/MusicCard";

// Play demo will pass a simple tune to the play component for user to try it out
// image and buttons align vertically in the center, without other distractions, so user can focus here
// two buttons align horizontally
const Home = () => {
  const tryMusic: Music =
    musics.find((item) => item.name === "Twinkle, Twinkle, Little Star") ??
    musics[0];

  return (
    <VStack mx={"auto"} mt={10}>
      <Image
        src={homePic}
        maxWidth={{ base: "250px", sm: "300px", md: "450px" }}
        mx="auto"
        marginTop={10}
        alt="violin silhouette site image"
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
            Play Demo
          </Button>
        </Link>
        <Link to="/browse">
          <Button
            backgroundColor={"blue.300"}
            color={"black"}
            fontWeight={"bold"}
            _hover={{ bg: "white" }}
          >
            Browse Collection
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default Home;
