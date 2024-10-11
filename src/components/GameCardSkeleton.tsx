import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  //Showing skeleton components while loading the real component gives user instant feedback which enhances user interaction with the page
  //Instead of showing a blank loading page which will make user feel don't know what's going on, whether the page is loading or not, the connection is lost or not
  //positive feedback also helps to keep users on the page instead of navigating away which promotes more visits hence more chance to sell the product
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
