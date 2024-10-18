interface Props {
  position?: string;
  handleNoteClick: (noteName: string) => void; // Function to handle note clicks
  incorrectNote: string | null; // The incorrect note for styling
  currentNote: string;
  showNames: boolean;
  noteName: string; // The current note to highlight
}

const FingerBoardTile = ({
  position,
  handleNoteClick,
  incorrectNote,
  currentNote,
  showNames,
  noteName,
}: Props) => {
  return (
    <div className={`fingerBoardTile ${position}`}>
      <div className="partialString"></div>
      <button
        className="partialStringTop"
        onClick={() => handleNoteClick(noteName)}
        style={{
          backgroundColor:
            incorrectNote === noteName
              ? "rgba(226, 77, 77, 0.46)"
              : currentNote === noteName && showNames
              ? "rgba(130, 214, 138, 0.46)"
              : "",
        }}
      >
        {showNames ? noteName : ""}
      </button>
    </div>
  );
};

export default FingerBoardTile;
