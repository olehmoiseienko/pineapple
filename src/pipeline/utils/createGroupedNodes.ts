import { PredefinedNode } from "../types";

export const createGroupedNodes = (nodes: PredefinedNode[]) => {
  const groups: Record<string, PredefinedNode[]> = {};

  nodes.forEach((node: PredefinedNode) => {
    if (!groups[node.module]) {
      groups[node.module] = [node];
    } else {
      groups[node.module].push(node);
    }
  });

  // TODO: describe types for groups, group, node here
  return Object.entries(groups);
};
