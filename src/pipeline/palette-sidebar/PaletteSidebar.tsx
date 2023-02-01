import React, { useEffect, useState } from "react";
import DraggablePalette from "./DraggablePalette";
import Filter from "../../shared/Filter";
import StyledSidebar from "../styled/StyledSidebar";
import { createGroupedNodes } from "../utils/createGroupedNodes";

interface Props {
  paletteNodes: any;
}

const PaletteSidebar = ({ paletteNodes }: Props) => {
  const [displayedGroupedNodes, setDisplayedGroupedNodes] = useState<any>([]);

  useEffect(() => {
    updateNodesTree(paletteNodes);
  }, [paletteNodes]);

  const onFilterHandler = (searchQuery: string) => {
    if (searchQuery.length) {
      const filteredNodes = paletteNodes.filter((node: any) =>
        node.type.includes(searchQuery)
      );
      updateNodesTree(filteredNodes);
    } else {
      updateNodesTree(paletteNodes);
    }
  };

  const updateNodesTree = (nodeList: any) => {
    setDisplayedGroupedNodes(createGroupedNodes(nodeList));
  };

  return (
    <StyledSidebar>
      <Filter onFilter={onFilterHandler} />
      <DraggablePalette groupedNodes={displayedGroupedNodes} />
    </StyledSidebar>
  );
};

export default PaletteSidebar;
