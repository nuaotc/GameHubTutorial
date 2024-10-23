import violinPic from "../../assets/violinSilhouette_resized.png";
import { Box, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import "./ContactFormResponse.css";

const ContactFormResponse = () => {
  // useLocation works with useNavigate in the contact form
  // name property value can be accessed from location state
  // gives user instant feedback with a little animation to add some fun to the page
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
