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
        noteName="G#0"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="D#1"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="A#2"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="F2"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="A1"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="E1"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="B2"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="F#2"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="A#1"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="F1"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="C2"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="G2"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="B1"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="F#1"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="C#2"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="G#2"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="C1"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="G1"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="D2"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="A3"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="C#1"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="G#1"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="D#2"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="A#3"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="D1"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="A2"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="E2"
        position="position"
      />
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteName="B3"
        position="position"
      />
    </div>
  );
};
export default FingerBoard;
