import "./FingerBoard.css";
import FingerBoardTile from "./FingerBoardTile";

interface Props {
  handleNoteClick: (noteName: string) => void; // Function to handle note clicks
  incorrectNote: string | null; // The incorrect note for styling
  currentNote: string;
  showNames: boolean;
}

const FingerBoard = ({
  handleNoteClick,
  incorrectNote,
  currentNote,
  showNames,
}: Props) => {
  return (
    <div className="fingerBoard">
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["G#0", "Ab1"]}
      >
        {/* G#/Ab */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["D#1", "Eb1"]}
      >
        {/* D#/Eb */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["A#2", "Bb2"]}
      >
        {/* Bb/A# */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["F2"]}
      >
        F
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["A1"]}
        position="position"
      >
        A
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["E1"]}
        position="position"
      >
        E
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["B2"]}
        position="position"
      >
        B
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["F#2", "Gb2"]}
        position="position"
      >
        {/* F#/Gb */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["A#1", "Bb1"]}
      >
        {/* Bb/A# */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["F1"]}
      >
        F
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["C2"]}
      >
        C
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["G2"]}
      >
        G
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["B1"]}
      >
        B
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["F#1", "Gb1"]}
      >
        {/* F#/Gb */}
      </FingerBoardTile>
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["C#2", "Db2"]}
      >
        {/* C#/Db */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["G#2", "Ab3"]}
      >
        {/* G#/Ab */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["C1"]}
        position="position"
      >
        C
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["G1"]}
        position="position"
      >
        G
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["D2"]}
        position="position"
      >
        D
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["A3"]}
        position="position"
      >
        A
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["C#1", "Db1"]}
      >
        {/* C#/Db */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["G#1", "Ab2"]}
      >
        {/* G#/Ab */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["Eb2", "D#2"]}
      >
        {/* D#/Eb */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["A#3", "Bb3"]}
      >
        {/* Bb/A# */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["D1"]}
        position="position"
      >
        D
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["A2"]}
        position="position"
      >
        A
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["E2"]}
        position="position"
      >
        E
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName={["B3"]}
        position="position"
      >
        B
      </FingerBoardTile>
    </div>
  );
};
export default FingerBoard;
