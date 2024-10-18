import "./Staff.css";
import StaffTile from "./StaffTile";

const Staff = () => {
  return (
    <div className="staff">
      <StaffTile showNote={false} lineSpace="space" />
      <StaffTile showNote={false} lineSpace="line" lineType="ledger" />
      <StaffTile showNote={true} lineSpace="space" />
      <StaffTile showNote={false} lineSpace="line" />
      <StaffTile showNote={false} lineSpace="space" />
      <StaffTile showNote={false} lineSpace="line" />
      <StaffTile showNote={false} lineSpace="space" />
      <StaffTile showNote={false} lineSpace="line" />
      <StaffTile showNote={false} lineSpace="space" />
      <StaffTile showNote={true} lineSpace="line" />
      <StaffTile showNote={false} lineSpace="space" />
      <StaffTile showNote={false} lineSpace="line" />
      <StaffTile showNote={false} lineSpace="space" />
      <StaffTile showNote={false} lineSpace="line" lineType="ledger" />
      <StaffTile showNote={false} lineSpace="space" />
      <StaffTile showNote={false} lineSpace="line" lineType="ledger" />
    </div>
  );
};

export default Staff;
