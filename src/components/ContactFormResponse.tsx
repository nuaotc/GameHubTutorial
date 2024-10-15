import violinPic from "../assets/violinSilhouette.png";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import "./ContactFormResponseAnimation.css";
import { FaArrowUp } from "react-icons/fa";

const ContactFormResponse = () => {
  const location = useLocation();
  const { name } = location.state;
  return (
    <Box>
      <Image
        mx={"auto"}
        marginTop={10}
        src={violinPic}
        alt="Animated"
        className="resImg"
      />
      <Text
        textAlign={"center"}
        className="resMsg"
        fontSize={22}
        mt={250}
        color={"blue.300"}
      >
        Message received! Thank you {name}!
      </Text>
    </Box>
  );
};

export default ContactFormResponse;
