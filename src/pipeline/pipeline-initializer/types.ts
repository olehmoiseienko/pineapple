import { BaseNode } from "../models/Node";
import type { BaseEdge } from "../models/Edge";
import type { PaletteNode } from "../models/Palette";
import type { NodeTypeComponentMap } from "../models/NodeTypeComponentMap";
import React from "react";
import { registeredAllowedConfigsNames } from "../pipeline-configs/staticConfigs";

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
  nodeCreator: (options: any) => BaseNode;
  editPanelComponent: React.MemoExoticComponent<any>;
  pipelinePreferences: any;
}

export interface InitializerOptions {
  // TODO: specify types
  [key: string]: any;
}

export enum ConfigType {
  STATIC = "static",
  API = "api",
}

export interface GetConfigOptions {
  configName: registeredAllowedConfigsNames;
  configType: ConfigType;
}
