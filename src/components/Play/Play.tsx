import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import FingerBoard from "./FingerBoard";
import Control from "./Control";
import { useEffect, useRef, useState } from "react";
import { Note, notes } from "./data/notes";
import noteImages from "./data/staves";
import noteImagePlaceholder from "../../assets/staves/empty.png";
import { useLocation } from "react-router-dom";
import "./Play.css";

function Play() {
  const location = useLocation();
  const { noteSequence = [] } = location.state as { noteSequence: string[] };

  const [isPlaying, setIsPlaying] = useState(false);
  const inputSequence = noteSequence;
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0); // Tracks the correct note to click next
  const [incorrectNote, setIncorrectNote] = useState<string | null>(null); // Tracks last incorrect note clicked

  const [showNames, setShowNames] = useState(true); // Start with names visible
  const [showMsg, setShowMsg] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Toggle hint switch
  const toggleNames = () => {
    setShowNames((prev) => !prev);
  };

  const handleRefresh = () => {
    setCurrentNoteIndex(0);
    setIncorrectNote(null);
    setShowMsg(false);
  };

  const getNoteImage = (note: string) => {
    if (!note) {
      return noteImagePlaceholder; // Return a placeholder image or handle the case when note is undefined/null
    }
    const noteWithoutAccidental = note.replace("#", "").replace("b", ""); // Remove sharps/flats
    return noteImages[noteWithoutAccidental as keyof typeof noteImages];
  };

  const previousNote =
    currentNoteIndex > 0 ? inputSequence[currentNoteIndex - 1] : null;
  const currentNote = inputSequence[currentNoteIndex];
  const nextNote =
    currentNoteIndex < inputSequence.length - 1
      ? inputSequence[currentNoteIndex + 1]
      : null;

  // Function to handle when a note is clicked
  const handleNoteClick = (noteName: string) => {
    const correctNote = inputSequence[currentNoteIndex];

    const clickedNote = notes.find((n: Note) => n.name.includes(noteName));

    if (clickedNote) {
      const audio = new Audio(clickedNote.file);
      audio.play();
    }

    if (noteName === correctNote) {
      setIncorrectNote(null);
      if (currentNoteIndex < inputSequence.length - 1) {
        setCurrentNoteIndex(currentNoteIndex + 1);
      } else {
        setCurrentNoteIndex(0);
        setShowMsg(true);
      }
    } else {
      setIncorrectNote(noteName);
    }
  };

  const playNote = (note: string) => {
    const noteToPlay = notes.find((n: Note) => n.name.includes(note));
    if (noteToPlay) {
      const audio = new Audio(noteToPlay.file);
      audio.play();
    }
  };

  // Function to stop the interval and reset the current note index
  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval
      intervalRef.current = null; // Reset the interval reference
    }
    setIsPlaying(false); // Stop the autoplay
    setCurrentNoteIndex(0); // Reset the note index to 0
  };

  // Function to start the autoplay using setInterval
  const startAutoplay = () => {
    let index = 0; // Local index for autoplay

    intervalRef.current = setInterval(() => {
      if (index < inputSequence.length) {
        setCurrentNoteIndex(index); // Update the current note index
        playNote(inputSequence[index]); // Play the current note
        index++; // Move to the next note
      } else {
        stopAutoplay(); // Stop autoplay once all notes are played
      }
    }, 520); // Set the interval to 500ms between notes
  };

  // Toggle autoplay when the button is clicked
  const handleAutoplay = () => {
    if (isPlaying) {
      stopAutoplay(); // Stop the autoplay if it's currently playing
    } else {
      setIsPlaying(true); // Start autoplay
      startAutoplay(); // Call the function to start the sequence
    }
  };

  // Clean up when the component unmounts
  useEffect(() => {
    return () => {
      stopAutoplay(); // Ensure autoplay stops if the component unmounts
    };
  }, []);

  // Returns true if the note is the current one to guess
  // const isCurrentNote = (noteName: string) => {
  //   return inputSequence[currentNoteIndex] === noteName;
  // };

  return (
    <Grid
      templateAreas={`"staff" "fingerBoard" "control"`}
      templateColumns="1fr"
    >
      <GridItem area="control" mt={5} mx={"auto"} width="16rem">
        <Control
          refresh={handleRefresh}
          toggleNames={toggleNames}
          showNames={showNames}
          autoPlay={handleAutoplay}
          isPlaying={isPlaying}
        />
        <Text
          className={`msg ${showMsg ? "active" : ""}`}
          color={"blue.300"}
          textAlign={"center"}
          fontSize={"xxx-large"}
          fontWeight={"bold"}
        >
          {showMsg ? "Well Done!" : ""}
        </Text>
      </GridItem>

      <GridItem area="staff" mx={"auto"} mt={5}>
        <HStack spacing={0}>
          {previousNote ? (
            <img
              src={getNoteImage(previousNote)}
              alt={`Previous note: ${previousNote}`}
              style={{ opacity: 0.3 }} // Dimming the previous note
            />
          ) : (
            <img
              src={noteImagePlaceholder}
              alt="Empty"
              style={{ opacity: 0.3 }}
            />
          )}
          <img
            src={getNoteImage(currentNote)}
            alt={`Current note: ${currentNote}`}
            style={{ opacity: 1 }} // Current note fully visible
          />
          {nextNote ? (
            <img
              src={getNoteImage(nextNote)}
              alt={`Next note: ${nextNote}`}
              style={{ opacity: 0.3 }} // Dimming the next note
            />
          ) : (
            <img
              src={noteImagePlaceholder}
              alt="Empty"
              style={{ opacity: 0.3 }}
            />
          )}
        </HStack>
      </GridItem>

      <GridItem area="fingerBoard" mx={"auto"} mt={2}>
        <FingerBoard
          handleNoteClick={handleNoteClick}
          incorrectNote={incorrectNote}
          currentNote={inputSequence[currentNoteIndex]}
          showNames={showNames}
        />
      </GridItem>
    </Grid>
  );
}

export default Play;
