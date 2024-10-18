import violinPic from "../../assets/violinSilhouette_resized.png";
import { Box, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import "./ContactFormResponse.css";

const ContactFormResponse = () => {
  const location = useLocation();
  const { name } = location.state;
  return (
    <Box>
      <Image
        mx={"auto"}
        marginTop={100}
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
        Message received, {name}!
      </Text>
    </Box>
  );
};

export default ContactFormResponse;
