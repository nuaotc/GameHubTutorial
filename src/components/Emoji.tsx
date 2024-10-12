import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";
import { px } from "framer-motion";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  //index signature: tell typescript compliler this object can have any number of keys which are numbers
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} boxSize="30px" />;
};

export default Emoji;
