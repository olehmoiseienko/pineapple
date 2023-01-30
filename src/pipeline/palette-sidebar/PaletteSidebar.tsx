import React, { useEffect, useState } from "react";
import DraggablePalette from "./DraggablePalette";
import Filter from "../../shared/Filter";
import StyledSidebar from "../styled/StyledSidebar";
import { createGroupedNodes } from "../utils/createGroupedNodes";

interface Props {
  paletteNodeList: any;
}

const PaletteSidebar = ({ paletteNodeList }: Props) => {
  const [displayedGroupedNodes, setDisplayedGroupedNodes] = useState<any>([]);

  useEffect(() => {
    updateNodesTree(paletteNodeList);
  }, [paletteNodeList]);

  const onFilterHandler = (searchQuery: string) => {
    if (searchQuery.length) {
      const filteredNodes = paletteNodeList.filter((node: any) =>
        node.type.includes(searchQuery)
      );
      updateNodesTree(filteredNodes);
    } else {
      updateNodesTree(paletteNodeList);
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
