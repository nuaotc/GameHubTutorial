import { Button, Grid, GridItem } from "@chakra-ui/react";
import Browse from "./components/Browse/Browse";
import NavBarMain from "./components/NavBarMain";
import Play from "./components/Play/Play";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Home from "./components/Home";
import ContactForm from "./components/Contact/ContactForm";
import ContactFormResponse from "./components/Contact/ContactFormResponse";

function App() {
  // When user scrolls down, the scrolling state is set to true to display the to-top button
  const [isScrolling, setScrolling] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  // handles when to-top button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // top frame / main layout is 1 col 2 rows, first row being the fixed nav bar, second being the component/page area renders dynamically responds to user's click on the nav links
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
    >
      <GridItem
        className="stickyNav"
        area="nav"
        display="flex"
        justifyContent={"space-between"} // justify the two elements in a stack or flex box, 1st element aligh to the left side, second align to the right side
        alignItems={"center"}
      >
        <NavBarMain />
      </GridItem>

      <GridItem area="main" marginTop="60px">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/contactFormResponse"
            element={<ContactFormResponse />} // to use these routes, just import link or navigation from react route, enclose any buttons or images in <Link>, and pass other properties
          />
        </Routes>
        <Button
          className="toTopBtn"
          bottom="10"
          right="5"
          color="black"
          background={"blue.300"}
          position={"fixed"} // fixed to the bottom right corner
          display={isScrolling ? "block" : "none"}
          fontWeight={"bold"}
          fontSize={"x-large"}
          onClick={scrollToTop}
          _hover={{ bg: "white" }}
        >
          <FaArrowUp />
        </Button>
      </GridItem>
    </Grid>
  );
}

export default App;
