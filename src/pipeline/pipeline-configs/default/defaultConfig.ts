import { nodes, edges } from "./mocks/mocks";
import CustomNode from "./components/CustomNode";
import EditPanel from "./components/EditPanel";
import type { PaletteNode } from "../../models/Palette";
import { BaseNode } from "../../models/Node";
import type { BaseEdge } from "../../models/Edge";
import type { NodeTypeComponentMap } from "../../models/NodeTypeComponentMap";
import {nodeCreator as creator} from "./nodeCreator";
import {pipelinePreferences as preferences} from "./pipelinePreferences";

export const initNodes: BaseNode[] = nodes;

export const initEdges: BaseEdge[] = edges;

export const editPanelComponent = EditPanel;

export const nodeTypeComponentMap: NodeTypeComponentMap = {
  input: CustomNode,
  output: CustomNode,
  default: CustomNode,
};

export const paletteNodes: PaletteNode[] = [
  { module: "default-set", type: "input" },
  { module: "default-set", type: "output" },
  { module: "default-set", type: "default" },
];

export const nodeCreator = creator;

export const pipelinePreferences = preferences;
