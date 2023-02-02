// import default value if needed
import {
  initNodes,
  paletteNodes,
  nodeTypeComponentMap,
  editPanelComponent,
  nodeCreator,
  pipelinePreferences,
} from "../default";

// import define overrides here
import { edges } from "./mocks/mocks";

const initEdges = edges;

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
