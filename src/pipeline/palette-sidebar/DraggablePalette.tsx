import React from "react";
import { PaletteNode } from "../models/Palette"
import ExpandableGroup from "./ExpandableGroup";
import { draggableNodeKey } from "../constant";

interface Props<T> {
  groupedNodes: T[];
}

const DraggablePalette = <T extends PaletteNode>({
  groupedNodes,
}: Props<T>) => {
  const onDragHandler = (event: DragEvent, nodeType: string) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData(draggableNodeKey, nodeType);
      event.dataTransfer.effectAllowed = "move";
    }
  };

  return (
    <>
      {groupedNodes.map(([groupKey, groupNodes]: any, index: number) => (
        <ExpandableGroup
          key={index}
          groupNodes={groupNodes}
          groupName={groupKey}
          onDragNode={onDragHandler}
        />
      ))}
    </>
  );
};

export default DraggablePalette;
