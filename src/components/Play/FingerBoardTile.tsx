interface Props {
  position?: string;
  handleNoteClick: (noteId: number) => void; // Function to handle note clicks
  incorrectNote: number;
  currentNote: number;
  showNames: boolean;
  noteId: number; // ref the clicked the note, note can have two names, better to ref by id
  children?: string; // display name, not displaying sharps and flats, these can be deducted by the possition of natural note, to make the game panel more simple and easy to read
}

// fingerboradtile is the container for the partial string and clickable stirng top, also sets the background color
// partialString sets on top of tile, width to 4 px, look like a thin line center aligned which is a partial string, stack them vertically will make a complete string
// string top is a button, sets at the top layer, highest z index, clickable note area, where actual user interaction happens
const FingerBoardTile = ({
  position,
  handleNoteClick,
  incorrectNote,
  currentNote,
  showNames,
  noteId,
  children,
}: Props) => {
  return (
    <div className={`fingerBoardTile ${position}`}>
      <div className="partialString"></div>
      <button
        className="partialStringTop"
        onClick={() => handleNoteClick(noteId)}
        style={{
          backgroundColor:
            incorrectNote === noteId
              ? "rgba(226, 77, 77, 0.46)"
              : currentNote === noteId && showNames
              ? "rgba(130, 214, 138, 0.46)"
              : "",
        }}
      >
        {showNames && children}
      </button>
    </div>
  );
};

export default FingerBoardTile;
