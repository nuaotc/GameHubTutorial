export interface Note {
  id: number;
  name: string[];
  file: string;
}

import noteAb1 from "../../../assets/audio/notes/01A1b.mp3";
import noteA1 from "../../../assets/audio/notes/02A1.mp3";
import noteBb1 from "../../../assets/audio/notes/03B1b.mp3";
import noteB1 from "../../../assets/audio/notes/04B1.mp3";
import noteC1 from "../../../assets/audio/notes/05C1.mp3";
import noteDb1 from "../../../assets/audio/notes/06D1b.mp3";
import noteD1 from "../../../assets/audio/notes/07D1.mp3";
import noteEb1 from "../../../assets/audio/notes/08E1b.mp3";
import noteE1 from "../../../assets/audio/notes/09E1.mp3";
import noteF1 from "../../../assets/audio/notes/10F1.mp3";
import noteGb1 from "../../../assets/audio/notes/11G1b.mp3";
import noteG1 from "../../../assets/audio/notes/12G1.mp3";
import noteAb2 from "../../../assets/audio/notes/13A2b.mp3";
import noteA2 from "../../../assets/audio/notes/14A2.mp3";
import noteBb2 from "../../../assets/audio/notes/15B2b.mp3";
import noteB2 from "../../../assets/audio/notes/16B2.mp3";
import noteC2 from "../../../assets/audio/notes/17C2.mp3";
import noteDb2 from "../../../assets/audio/notes/18D2b.mp3";
import noteD2 from "../../../assets/audio/notes/19D2.mp3";
import noteEb2 from "../../../assets/audio/notes/20E2b.mp3";
import noteE2 from "../../../assets/audio/notes/21E2.mp3";
import noteF2 from "../../../assets/audio/notes/22F2.mp3";
import noteGb2 from "../../../assets/audio/notes/23G2b.mp3";
import noteG2 from "../../../assets/audio/notes/24G2.mp3";
import noteAb3 from "../../../assets/audio/notes/25A3b.mp3";
import noteA3 from "../../../assets/audio/notes/26A3.mp3";
import noteBb3 from "../../../assets/audio/notes/27B3b.mp3";
import noteB3 from "../../../assets/audio/notes/28B3.mp3";

//two names for enharmonics : A minor and G sharp are the same note
//when uploading new music, the only one version of the note name will be in the sequence which will be compared to get the note id
//depend on the key signature, the name used will be different, this is a scalable aproach, if future development allows user to uploading their own music will make it easier for them
export const notes: Note[] = [
  { id: 1, name: ["Ab1", "G#0"], file: noteAb1 },
  { id: 2, name: ["A1"], file: noteA1 },
  { id: 3, name: ["Bb1", "A#1"], file: noteBb1 },
  { id: 4, name: ["B1"], file: noteB1 },
  { id: 5, name: ["C1"], file: noteC1 },
  { id: 6, name: ["Db1", "C#1"], file: noteDb1 },
  { id: 7, name: ["D1"], file: noteD1 },
  { id: 8, name: ["Eb1", "D#1"], file: noteEb1 },
  { id: 9, name: ["E1"], file: noteE1 },
  { id: 10, name: ["F1"], file: noteF1 },
  { id: 11, name: ["Gb1", "F#1"], file: noteGb1 },
  { id: 12, name: ["G1"], file: noteG1 },
  { id: 13, name: ["Ab2", "G#1"], file: noteAb2 },
  { id: 14, name: ["A2"], file: noteA2 },
  { id: 15, name: ["Bb2", "A#2"], file: noteBb2 },
  { id: 16, name: ["B2"], file: noteB2 },
  { id: 17, name: ["C2"], file: noteC2 },
  { id: 18, name: ["Db2", "C#2"], file: noteDb2 },
  { id: 19, name: ["D2"], file: noteD2 },
  { id: 20, name: ["Eb2", "D#2"], file: noteEb2 },
  { id: 21, name: ["E2"], file: noteE2 },
  { id: 22, name: ["F2"], file: noteF2 },
  { id: 23, name: ["Gb2", "F#2"], file: noteGb2 },
  { id: 24, name: ["G2"], file: noteG2 },
  { id: 25, name: ["Ab3", "G#2"], file: noteAb3 },
  { id: 26, name: ["A3"], file: noteA3 },
  { id: 27, name: ["Bb3", "A#3"], file: noteBb3 },
  { id: 28, name: ["B3"], file: noteB3 },
];
