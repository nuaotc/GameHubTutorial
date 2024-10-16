import "./FingerBoard.css";
import FingerBoardTile from "./FingerBoardTile";

const FingerBoard = () => {
  return (
    <div className="fingerBoard">
      <FingerBoardTile value="G#" />
      <FingerBoardTile value="D#" />
      <FingerBoardTile value="A#" />
      <FingerBoardTile value="F" />
      <FingerBoardTile value="A" position="position" />
      <FingerBoardTile value="E" position="position" />
      <FingerBoardTile value="B" position="position" />
      <FingerBoardTile value="F#" position="position" />
      <FingerBoardTile value="A#" />
      <FingerBoardTile value="F" />
      <FingerBoardTile value="C" />
      <FingerBoardTile value="G" />
      <FingerBoardTile value="B" />
      <FingerBoardTile value="F#" />
      <FingerBoardTile value="C#" />
      <FingerBoardTile value="G#" />
      <FingerBoardTile value="C" position="position" />
      <FingerBoardTile value="G" position="position" />
      <FingerBoardTile value="D" position="position" />
      <FingerBoardTile value="A" position="position" />
      <FingerBoardTile value="C#" />
      <FingerBoardTile value="G#" />
      <FingerBoardTile value="D#" />
      <FingerBoardTile value="A#" />
      <FingerBoardTile value="D" position="position" />
      <FingerBoardTile value="A" position="position" />
      <FingerBoardTile value="E" position="position" />
      <FingerBoardTile value="B" position="position" />
    </div>
  );
};

export default FingerBoard;
