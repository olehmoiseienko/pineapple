import React from "react";
import { PredefinedNode } from "../types";
import ExpandableGroup from "./ExpandableGroup";
import { draggableNodeKey } from "../constant";

interface Props<T> {
  groupedNodes: T[];
}

const DraggablePalette = <T extends PredefinedNode>({
  groupedNodes,
}: Props<T>) => {
  const onDragHandler = (event: any, nodeType: string) => {
    event.dataTransfer.setData(draggableNodeKey, nodeType);
    event.dataTransfer.effectAllowed = "move";
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
