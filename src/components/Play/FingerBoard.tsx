import "./FingerBoard.css";
import FingerBoardTile from "./FingerBoardTile";

interface Props {
  handleNoteClick: (noteId: number) => void; // Function to handle note clicks
  incorrectNote: number; // Note clicked passed to the play component gets compared with current note then passed back to as The incorrect note for styling background to red
  currentNote: number; // correct note style background to green
  showNames: boolean; // toggle hint on/off
}

// the tile is positioned flex flow horizontally, each row 4 tiles, 7 rows, different note is assigned to each tile button by its id to position the notes correctly on fingerboard
// display name is passed as the children
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
        noteId={1}
      >
        {/* G#/Ab */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={8}
      >
        {/* D#/Eb */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={15}
      >
        {/* Bb/A# */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={22}
      >
        F
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={2}
        position="position"
      >
        A
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={9}
        position="position"
      >
        E
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={16}
        position="position"
      >
        B
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={23}
        position="position"
      >
        {/* F#/Gb */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={3}
      >
        {/* Bb/A# */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={10}
      >
        F
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={17}
      >
        C
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={24}
      >
        G
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={4}
      >
        B
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={11}
      >
        {/* F#/Gb */}
      </FingerBoardTile>
      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={18}
      >
        {/* C#/Db */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={25}
      >
        {/* G#/Ab */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={5}
        position="position"
      >
        C
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={12}
        position="position"
      >
        G
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={19}
        position="position"
      >
        D
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={26}
        position="position"
      >
        A
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={6}
      >
        {/* C#/Db */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={13}
      >
        {/* G#/Ab */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={20}
      >
        {/* D#/Eb */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={27}
      >
        {/* Bb/A# */}
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={7}
        position="position"
      >
        D
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={14}
        position="position"
      >
        A
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={21}
        position="position"
      >
        E
      </FingerBoardTile>

      <FingerBoardTile
        incorrectNote={incorrectNote}
        currentNote={currentNote}
        showNames={showNames}
        handleNoteClick={handleNoteClick}
        noteId={28}
        position="position"
      >
        B
      </FingerBoardTile>
    </div>
  );
};
export default FingerBoard;
