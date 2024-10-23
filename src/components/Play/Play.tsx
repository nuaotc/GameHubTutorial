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
  // preload the audio object by its file string
  const preloadAudio = (src: string) => {
    const audio = new Audio(src);
    audio.preload = "auto";
    return audio;
  };

  const usePreloadAudioFiles = () => {
    // creating a ref using React's useRef hook to store an object that maps number ids (as keys) to audio objects (as values)
    // useRef do not cause rerender like useState
    // multiple audio elements can be accessed and controlled independently by their id
    const audioFiles = useRef<{ [key: number]: HTMLAudioElement }>({});

    // on first load, audio file of each note in notes are preloaded and stored in the ref object in id and audio pairs
    useEffect(() => {
      notes.forEach((note: Note) => {
        audioFiles.current[note.id] = preloadAudio(note.file);
      });
    }, []);

    // Return preloaded audio files
    return audioFiles.current;
  };

  // retrive the note data stored in location state passed from other pages
  const location = useLocation();
  const { noteSequence = [], keySignature = "" } = location.state as {
    noteSequence: string[];
    keySignature: string;
  };

  // call audiopreload funcion and store preloaded audios in preloadedAudio
  const preloadedAudio = usePreloadAudioFiles();

  // tracks autoplay state toggles button play/stop
  const [isPlaying, setIsPlaying] = useState(false);

  // current note index in the note sequence, starting from 0
  // increment by 1 when user clicks the correct notev which is the note at the current index of sequence, or after auto played the note
  // reset after finished the note sequence or by refresh button
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);

  // if clicked note not equal to the correct note id, id will be recorded here, the fingerboard tile with the same id will change the background to red
  // reset at the end of sequence, or by refresh button
  const [incorrectNote, setIncorrectNote] = useState(0);

  // misses increment by 1 whenever an incorrect note is set
  // reset by the refresh button
  const [misses, setMisses] = useState(0);

  // hint toggle swich depend on this state to turn hint on or off (note names on the strings)
  const [showNames, setShowNames] = useState(true);

  // notify the text element to show message animation, after user finished playing the sequence, the grade message shows, set to false on refresh
  const [showMsg, setShowMsg] = useState(false);

  // managing an interval timer with useRef to store the interval ID, for set length between each note play and reference each interval for clearing it
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // function handles click event of the hint switch
  const toggleNames = () => {
    setShowNames((prev) => !prev);
  };

  // function handles click event of the refresh button
  const handleRefresh = () => {
    setCurrentNoteIndex(0);
    setIncorrectNote(0);
    setMisses(0);
    setShowMsg(false);
  };

  // find the note in notes of the current note in the sequence by note index
  const currentNoteObj = notes.find((note) =>
    note.name.includes(noteSequence[currentNoteIndex])
  );

  // get the current note id and store in currentNote
  const currentNote = currentNoteObj ? currentNoteObj.id : 0;

  // fetch the note name from note sequence by the index
  // trim the sharps and minors off a note name
  // fetch the staff image by the trimmed note name (image key)
  const getNoteImage = (anIndex: number) => {
    if (anIndex >= noteSequence.length) {
      return noteImagePlaceholder;
    }
    const noteWithoutAccidental = noteSequence[anIndex]
      .replace("#", "") // removes sharp
      .replace("b", ""); // Removes flat
    return noteImages[noteWithoutAccidental as keyof typeof noteImages];
  };

  // grading system by number of misses
  const getGrade = (misses: number) => {
    if (misses === 0) return "SSS";
    if (misses === 1) return "SS";
    if (misses === 2) return "S";
    if (misses === 3) return "A";
    if (misses === 4) return "B";
    if (misses === 5) return "C";
    return "Fail"; // 6 or more misses
  };

  // function to play the note audio
  const playNote = (noteId: number) => {
    // Access note's audio from preloaded audio by the note id
    const audio = preloadedAudio[noteId];

    // If audio found, play audio from start
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  // Function to handle when a note is clicked
  const handleNoteClick = (noteId: number) => {
    // call the function to play the note audio
    playNote(noteId);

    // If clicked note equal to the current note (correct note):
    // clears the incorrect note
    // if clicked note is before the last note in the sequence, increment current index by 1
    // other wise reset current index to 0 (back to the start of the sequence)
    // also show the grade message to notify user has finished the tune
    // if clicked note not equal to the current note:
    // set incorrect note to be the clicked note, increment misses by 1
    if (noteId === currentNote) {
      setIncorrectNote(0);
      if (currentNoteIndex < noteSequence.length - 1) {
        setCurrentNoteIndex(currentNoteIndex + 1);
      } else {
        setCurrentNoteIndex(0);
        setShowMsg(true);
      }
    } else {
      setIncorrectNote(noteId);
      setMisses(misses + 1); // Mark as incorrect
    }
  };

  // Function to stop the autoplay
  const stopAutoplay = () => {
    // intervalRef is a reference that holds the ID of the interval returned by setInterval
    // if an active interval exists, id will be passed to the clearInterval function to clear the interval which stops it execute at regular intervals
    // set current interval to null means no longer have a reference to the cleared interval.
    // it prevents any subsequent calls to this code from trying to clear an already cleared or non-existent interval.
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // change the stop icon to play icon again on the button
    setIsPlaying(false);

    // reset the index to 0
    setCurrentNoteIndex(0);
  };

  // Function to start the autoplay using setInterval
  const startAutoplay = () => {
    // Local index for autoplay
    let index = 0;

    // setInterval is a built-in JavaScript function that repeatedly executes a function after a specified time delay
    // setInterval returns an interval ID stored in intervalRef.current which can later be used to clear the interval
    intervalRef.current = setInterval(() => {
      // if local index less than the sequence length
      if (index < noteSequence.length) {
        // Update the current note index (autoplay starts the sequence from index 0, reset user's previous play index)
        setCurrentNoteIndex(index);

        // find the corresponding note in the notes
        const currentNoteObj = notes.find((note) =>
          note.name.includes(noteSequence[index])
        );

        // if found, play the note audio
        if (currentNoteObj) {
          playNote(currentNoteObj.id);
        }

        // increment local index by 1, move to the next note
        index++;
      } else {
        // Stop autoplay once all notes are played
        stopAutoplay();
      }
    }, 500); // Set the delay of execution to 500 milliseconds meaning 0.5 seconds between notes
  };

  // Toggle autoplay when the button is clicked
  const handleAutoplay = () => {
    if (isPlaying) {
      stopAutoplay(); // Stop the autoplay if it's currently playing
    } else {
      setIncorrectNote(0); // Clear previous incorrect note user clicked during play
      setIsPlaying(true); // Set state to true changes the button icon to stop
      startAutoplay(); // Call the function to start the autoplay
    }
  };

  // Clean up when the component unmounts
  useEffect(() => {
    return () => {
      stopAutoplay(); // Ensure autoplay stops if the component unmounts
    };
  }, []);

  // finding the key from keys by name
  const key = keys.find((key) => key.name === keySignature);
  // fetch the key signature image
  const keyImg = key?.file;

  // displays game panel in 1 col, 3 rows
  // staff image in row 1, fingerboard in row 2, control and message area in row 3
  return (
    <Grid
      templateAreas={`"staff" "fingerBoard" "control"`}
      templateColumns="1fr"
    >
      <GridItem area="staff" mx={"auto"} mt={5}>
        <HStack spacing={0}>
          <img
            src={keyImg}
            style={{ opacity: 0.3 }} // Dimming the previous note
          />

          <img
            src={getNoteImage(currentNoteIndex)}
            style={{ opacity: 1 }} // Current note fully visible
          />

          <img
            src={getNoteImage(currentNoteIndex + 1)}
            style={{ opacity: 0.3 }} // Dimming the next note
          />

          <img
            src={endStaff}
            style={{ opacity: 0.3 }} // Dimming the previous note
          />
        </HStack>
      </GridItem>

      <GridItem area="fingerBoard" mx={"auto"} mt={2}>
        <FingerBoard
          handleNoteClick={handleNoteClick}
          incorrectNote={incorrectNote}
          currentNote={currentNote}
          showNames={showNames}
        />
      </GridItem>

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
    </Grid>
  );
}

export default Play;
