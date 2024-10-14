import { Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import homePic from "../assets/home.png";
import violinStart from "../assets/audio/violinEntry.mp3";
import bowSmall from "../assets/bow_sm.png";
import bowLarge from "../assets/bow_lg.png";
import { useState } from "react";

const Home = () => {
  const playSound = () => {
    const audio = new Audio(violinStart);
    audio.play();
  };

  const [imageSrc, setImageSrc] = useState(bowLarge);

  return (
    <>
      <Image
        src={homePic}
        maxWidth={{ base: "200px", sm: "300px", md: "450px" }}
        mx="auto"
        marginTop={10}
      />

      <Heading
        as="h1"
        textAlign={"center"}
        color={"blue.300"}
        margin={3}
        fontSize={{ base: "3xl", md: "5xl" }}
      >
        Welcome to VioLearn
      </Heading>

      <Text
        textAlign={"center"}
        color={"white"}
        margin={3}
        fontSize={{ base: "xl", md: "3xl" }}
      >
        Learn the violin, one note at a time
      </Text>

      <Link to="/play">
        <Image
          maxWidth={{ base: "300px", sm: "400px", md: "600px" }}
          mx={"auto"}
          src={imageSrc}
          alt="Hoverable"
          onMouseEnter={() => setImageSrc(bowSmall)} // Change image on hover
          onMouseLeave={() => setImageSrc(bowLarge)} // Revert on mouse leave
          transition="0.3s ease"
          onClick={playSound} // Smooth transition effect
        />
      </Link>
    </>
  );
};

export default Home;
