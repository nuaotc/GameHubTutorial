interface Props {
  lineSpace: string;
  lineType?: string;
  showNote: boolean;
}

const StaffTile = ({ lineSpace, lineType, showNote }: Props) => {
  let value = "";
  if (showNote) {
    value = "\u26AB";
  } else {
    value = "Cb";
  }

  return (
    <div className="staffTile">
      <div className={`${lineSpace} ${lineType}`}></div>
      <div className="note">{value}</div>
    </div>
  );
};

export default StaffTile;
