import { Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import homePic from "../assets/home.png";
import violinStart from "../assets/audio/violinEntry.mp3";
import bow2 from "../assets/bow2.png";
import bow1 from "../assets/bow1.png";
import { useState } from "react";

const Home = () => {
  const playSound = () => {
    const audio = new Audio(violinStart);
    audio.play();
  };

  const [imageSrc, setImageSrc] = useState(bow1);

  return (
    <>
      <Image
        src={homePic}
        maxWidth={{ base: "250px", sm: "300px", md: "450px" }}
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
        fontSize={{ base: "xl", md: "2xl" }}
      >
        Learn the violin, one note at a time
      </Text>

      <Link to="/play">
        <Image
          maxWidth={{ base: "400px", md: "600px" }}
          mx={"auto"}
          src={imageSrc}
          alt="Hoverable"
          onMouseEnter={() => setImageSrc(bow2)} // Change image on hover
          onMouseLeave={() => setImageSrc(bow1)} // Revert on mouse leave
          transition="0.3s ease"
          onClick={playSound} // Smooth transition effect
        />
      </Link>
    </>
  );
};

export default Home;
