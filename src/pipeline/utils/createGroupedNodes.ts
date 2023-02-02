import { PaletteNode } from "../models/Palette";

export const createGroupedNodes = (nodes: PaletteNode[]) => {
  const groups: Record<string, PaletteNode[]> = {};

  nodes.forEach((node: PaletteNode) => {
    if (!groups[node.module]) {
      groups[node.module] = [node];
    } else {
      groups[node.module].push(node);
    }
  });

  // TODO: describe types for groups, group, node here
  return Object.entries(groups);
};
