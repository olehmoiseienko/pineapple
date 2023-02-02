import { BaseNode } from "./Node";
import { BaseEdge } from "./Edge";

export interface DeployedPipeline {
  nodes: BaseNode[];
  edges: BaseEdge[];
}
