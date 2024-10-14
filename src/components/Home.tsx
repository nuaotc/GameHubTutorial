import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcom to VioLearn</h1>
      <Link to={"/play"}>Play</Link>
    </>
  );
};

export default Home;
