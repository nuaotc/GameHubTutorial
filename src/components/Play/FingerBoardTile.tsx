interface Props {
  position?: string;
  handleNoteClick: (noteId: number) => void; // Function to handle note clicks
  incorrectNote: number; // The incorrect note for styling
  currentNote: number;
  showNames: boolean;
  noteId: number;
  children?: string; // The current note to highlight
}

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
