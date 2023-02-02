import type { NodePort } from "./NodePort";
import type { Node, XYPosition } from "reactflow";

export class BaseNode implements IBaseNode {
  id: string;
  type?: string | undefined;
  position: XYPosition;
  data: BaseNodeData;

  constructor(
    id: string,
    type: string,
    position: XYPosition,
    data: BaseNodeData
  ) {
    this.id = id;
    this.position = position;
    this.data = data;
  }
}

export interface IBaseNode extends Node {
  data: BaseNodeData;
}

interface BaseNodeData {
  label: string;
  sources: NodePort[];
  targets: NodePort[];
}
