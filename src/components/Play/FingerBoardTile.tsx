interface Props {
  position?: string;
  handleNoteClick: (noteName: string) => void; // Function to handle note clicks
  incorrectNote: string | null; // The incorrect note for styling
  currentNote: string;
  showNames: boolean;
  noteName: string[];
  children?: string; // The current note to highlight
}

const FingerBoardTile = ({
  position,
  handleNoteClick,
  incorrectNote,
  currentNote,
  showNames,
  noteName,
  children,
}: Props) => {
  return (
    <div className={`fingerBoardTile ${position}`}>
      <div className="partialString"></div>
      <button
        className="partialStringTop"
        onClick={() => handleNoteClick(noteName[0])}
        style={{
          backgroundColor:
            incorrectNote === noteName[0] || incorrectNote === noteName[1]
              ? "rgba(226, 77, 77, 0.46)"
              : (currentNote === noteName[0] || currentNote === noteName[1]) &&
                showNames
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
