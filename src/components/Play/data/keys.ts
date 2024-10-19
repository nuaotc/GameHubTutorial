import CmajorAminor from "../../../assets/keys/CmajorAminor.png";
import GmajorEminor from "../../../assets/keys/GmajorEminor.png";
import DmajorBminor from "../../../assets/keys/DmajorBminor.png";
import AmajorFsharpminor from "../../../assets/keys/AmajorFsharpminor.png";
import FmajorDminor from "../../../assets/keys/FmajorDminor.png";
import BflatmajorGminor from "../../../assets/keys/BbmajorGminor.png";
import EflatmajorCminor from "../../../assets/keys/EbmajorCminor.png";

export interface KeySignature {
  id: number;
  name: string;
  scale: string[];
  file: string;
}

export const keys: KeySignature[] = [
  {
    id: 1,
    name: "cmajor",
    scale: ["C1", "D1", "E1", "F1", "G1", "A2", "B2", "C2"],
    file: CmajorAminor,
  },
  {
    id: 2,
    name: "aminor",
    scale: ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "A3"],
    file: CmajorAminor,
  },
  {
    id: 3,
    name: "gmajor",
    scale: ["G1", "A2", "B2", "C2", "D2", "E2", "F#2", "G2"],
    file: GmajorEminor,
  },
  {
    id: 4,
    name: "eminor",
    scale: ["E1", "F#1", "G1", "A2", "B2", "C2", "D2", "E2"],
    file: GmajorEminor,
  },
  {
    id: 5,
    name: "dmajor",
    scale: ["D1", "E1", "F#1", "G1", "A2", "B2", "C#2", "D2"],
    file: DmajorBminor,
  },
  {
    id: 6,
    name: "bminor",
    scale: ["B1", "C#1", "D1", "E1", "F#1", "G1", "A2", "B2"],
    file: DmajorBminor,
  },
  {
    id: 7,
    name: "amajor",
    scale: ["A2", "B2", "C#2", "D2", "E2", "F#2", "G#2", "A3"],
    file: AmajorFsharpminor,
  },
  {
    id: 8,
    name: "fsharpminor",
    scale: ["F#1", "G#1", "A2", "B2", "C#2", "D2", "E2", "F#2"],
    file: AmajorFsharpminor,
  },
  {
    id: 9,
    name: "fmajor",
    scale: ["F1", "G1", "A2", "Bb2", "C2", "D2", "E2", "F2"],
    file: FmajorDminor,
  },
  {
    id: 10,
    name: "dminor",
    scale: ["D1", "E1", "F1", "G1", "A2", "Bb2", "C2", "D2"],
    file: FmajorDminor,
  },
  {
    id: 11,
    name: "bflatmajor",
    scale: ["Bb1", "C1", "D1", "Eb1", "F1", "G1", "A2", "Bb2"],
    file: BflatmajorGminor,
  },
  {
    id: 12,
    name: "gminor",
    scale: ["G1", "A2", "Bb2", "C2", "D2", "Eb2", "F2", "G2"],
    file: BflatmajorGminor,
  },
  {
    id: 13,
    name: "eflatmajor",
    scale: ["Eb1", "F1", "G1", "Ab2", "Bb2", "C2", "D2", "Eb2"],
    file: EflatmajorCminor,
  },
  {
    id: 14,
    name: "cminor",
    scale: ["C1", "D1", "Eb1", "F1", "G1", "Ab2", "Bb2", "C2"],
    file: EflatmajorCminor,
  },
];
