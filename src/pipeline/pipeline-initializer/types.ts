import { BaseNode } from "../models/Node";
import type { BaseEdge } from "../models/Edge";
import type { PaletteNode } from "../models/Palette";
import type { NodeTypeComponentMap } from "../models/NodeTypeComponentMap";
import React from "react";

export interface PipelineConfig {
  paletteNodes: PaletteNodes;
  workspaceConfig: WorkspaceConfig;
}

export type PaletteNodes = PaletteNode[];

export interface WorkspaceConfig {
  initialNodes: BaseNode[];
  initialEdges: BaseEdge[];
  nodeTypeComponentMap: NodeTypeComponentMap;
  // TODO: specify types
  nodeCreator: (optopns: any) => BaseNode;
  editPanelComponent: React.MemoExoticComponent<any>;
}

export interface InitializerOptions {
  // TODO: specify types
  [key: string]: any;
}
