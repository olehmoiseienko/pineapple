// import default value if needed
import {
  nodeTypeComponentMap,
  editPanelComponent,
  nodeCreator,
  pipelinePreferences,
} from "../default";

// import define overrides here
import { nodes, edges } from "./mocks/mocks";
import {PaletteNode} from "../../models/Palette";


const initNodes = nodes;
const initEdges = edges;

const paletteNodes: PaletteNode[] = [
  { module: "pineapple", type: "brazil-pineapple" },
  { module: "pineapple", type: "africa-pineapple" },
  { module: "pineapple", type: "eu-pineapple" },
  { module: "banana", type: "brazil-banana" },
  { module: "banana", type: "africa-banana" },
  { module: "banana", type: "eu-banana" },
];

// and export PipelineConfig
export {
  initNodes,
  initEdges,
  paletteNodes,
  nodeTypeComponentMap,
  editPanelComponent,
  nodeCreator,
  pipelinePreferences,
};
