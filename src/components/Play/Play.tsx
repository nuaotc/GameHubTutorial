import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import FingerBoard from "./FingerBoard";
import Control from "./Control";
import { useEffect, useRef, useState } from "react";
import { Note, notes } from "./data/notes";
import noteImages from "./data/staves";
import noteImagePlaceholder from "../../assets/staves/empty.png";
import { useLocation } from "react-router-dom";
import endStaff from "../../assets/staves/empty_end.png";
import "./Play.css";
import { keys } from "./data/keys";

function Play() {
  const preloadAudio = (src: string) => {
    const audio = new Audio(src);
    audio.preload = "auto"; // Preload the audio file
    return audio;
  };

  const usePreloadAudioFiles = () => {
    const audioFiles = useRef<{ [key: string]: HTMLAudioElement }>({});

    useEffect(() => {
      notes.forEach((note: Note) => {
        // Preload the audio and store it in the ref object by the first name in the array
        audioFiles.current[note.name[0]] = preloadAudio(note.file);
      });
    }, []);

    return audioFiles.current; // Return preloaded audio files
  };

  const location = useLocation();
  const { noteSequence = [], keySignature = "" } = location.state as {
    noteSequence: string[];
    keySignature: string;
  };

  const preloadedAudio = usePreloadAudioFiles();

  const [isPlaying, setIsPlaying] = useState(false);
  const inputSequence = noteSequence;
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0); // Tracks the correct note to click next
  const [incorrectNote, setIncorrectNote] = useState<string | null>(null); // Tracks last incorrect note clicked
  const [misses, setMisses] = useState(0);

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
    setMisses(0);
    setShowMsg(false);
  };

  const getNoteImage = (note: string) => {
    if (!note) {
      return noteImagePlaceholder; // Return a placeholder image or handle the case when note is undefined/null
    }
    const noteWithoutAccidental = note.replace("#", "").replace("b", ""); // Remove sharps/flats
    return noteImages[noteWithoutAccidental as keyof typeof noteImages];
  };

  const currentNote = inputSequence[currentNoteIndex];
  const nextNote =
    currentNoteIndex < inputSequence.length - 1
      ? inputSequence[currentNoteIndex + 1]
      : null;

  const getGrade = (misses: number) => {
    if (misses === 0) return "SSS";
    if (misses === 1) return "SS";
    if (misses === 2) return "S";
    if (misses === 3) return "A";
    if (misses === 4) return "B";
    if (misses === 5) return "C";
    return "Fail"; // 6 or more misses
  };

  // Function to handle when a note is clicked
  const handleNoteClick = (noteName: string) => {
    const correctNote = inputSequence[currentNoteIndex];

    // Find the note that matches the clicked name
    const noteToPlay = notes.find((note) => note.name.includes(noteName));

    if (noteToPlay) {
      const audio = preloadedAudio[noteToPlay.name[0]]; // Access preloaded audio by the first name
      if (audio) {
        audio.currentTime = 0; // Reset audio to the start
        audio.play(); // Play the preloaded audio
      }
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
      setMisses(misses + 1); // Mark as incorrect
    }
  };

  const playNote = (noteName: string) => {
    // Find the note that matches the played name
    const noteToPlay = notes.find((note) => note.name.includes(noteName));

    if (noteToPlay) {
      const audio = preloadedAudio[noteToPlay.name[0]]; // Access preloaded audio by the first name
      if (audio) {
        audio.currentTime = 0; // Reset audio to the start
        audio.play(); // Play the preloaded audio
      }
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
    }, 500); // Set the interval to 500ms between notes
  };

  // Toggle autoplay when the button is clicked
  const handleAutoplay = () => {
    if (isPlaying) {
      stopAutoplay(); // Stop the autoplay if it's currently playing
    } else {
      setIncorrectNote(null);
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

  const key = keys.find((key) => key.name === keySignature);
  const keyImg = key?.file;

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

        <Text mt={2} fontSize="18px" color="gray.500" textAlign="center">
          Misses: {misses}
        </Text>

        {showMsg && (
          <Text
            mt={2}
            className={`msg ${showMsg ? "active" : ""}`}
            color={"blue.300"}
            textAlign={"center"}
            fontSize="30px"
            fontWeight={"bold"}
            border={showMsg ? "2px dashed" : "none"}
            borderColor="blue"
            animation={showMsg ? "rainbowDash 1.5s linear infinite" : "none"}
            sx={{ padding: "5px", borderRadius: "8px" }}
          >
            Grade: {getGrade(misses)}
          </Text>
        )}
      </GridItem>

      <GridItem area="staff" mx={"auto"} mt={5}>
        <HStack spacing={0}>
          <img
            src={keyImg}
            alt={`Key signature: ${keySignature}`}
            style={{ opacity: 0.3 }} // Dimming the previous note
          />

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
          <img
            src={endStaff}
            alt="Empty staff"
            style={{ opacity: 0.3 }} // Dimming the previous note
          />
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
