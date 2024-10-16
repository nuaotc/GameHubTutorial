interface Props {
  position?: string;
  value?: string;
}

const FingerBoardTile = ({ position, value }: Props) => {
  return (
    <div className={`fingerBoardTile ${position}`}>
      <div className="partialString"></div>
      <div className="partialStringTop">{value}</div>
    </div>
  );
};

export default FingerBoardTile;
