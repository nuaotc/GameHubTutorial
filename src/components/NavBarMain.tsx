import { Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { ReactNode } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface Props {
  to: string;
  children: ReactNode;
}

function CustomLink({ to, children, ...props }: Props) {
  //take the relative or absolute path combine with the path currently on
  //gives the actuall full path for accessing
  const resolvedPath = useResolvedPath(to);

  //entire path must match instead of partial match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "activeNav" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const NavBarMain = () => {
  return (
    <>
      <Link to="/">
        {" "}
        <Image borderRadius="10px" src={logo} boxSize="45px"></Image>{" "}
      </Link>
      <nav>
        <ul>
          <CustomLink to="/play">Play</CustomLink>
          <CustomLink to="/browse">Browse</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </ul>
      </nav>
    </>
  );
};

export default NavBarMain;
