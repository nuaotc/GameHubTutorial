import { Button, Grid, GridItem } from "@chakra-ui/react";
import Browse from "./components/Browse";
import NavBarMain from "./components/NavBarMain";
import Play from "./components/Play";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Home from "./components/Home";
import ContactForm from "./components/ContactForm";
import ContactFormResponse from "./components/ContactFormResponse";

function App() {
  const [isScrolling, setScrolling] = useState(false);
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Top level page has 1 col 2 rows on all devices
  // Row 1 holds the main menu for navigating beween home play browse and buy pages
  // Row 2 holds the dynamic components of the above 4 pages using react router
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
        justifyContent={"space-between"}
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
            element={<ContactFormResponse />}
          />
        </Routes>
        <Button
          className="toTopBtn"
          bottom="10"
          right="5"
          color="black"
          background={"blue.300"}
          position={"fixed"}
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
