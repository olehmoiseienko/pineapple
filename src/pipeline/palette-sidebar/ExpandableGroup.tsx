import React from "react";
import Collapsible from "react-collapsible";
import StyledPaletteNode from "../styled/StyledPaletteNode";
import StyledExpandableGroup from "../styled/StyledExpandableGroup";

interface Props {
  groupName: string;
  groupNodes: any;
  onDragNode: any;
}

const ExpandableGroup = ({ groupName, groupNodes, onDragNode }: Props) => {
  return (
    <StyledExpandableGroup>
      <Collapsible open={true} trigger={groupName} transitionTime={100}>
        {groupNodes.map((node: any, i: number) => (
          <StyledPaletteNode
            key={i}
            draggable
            onDragStart={(event) => onDragNode(event, node.type)}
          >
            {node.type}
          </StyledPaletteNode>
        ))}
      </Collapsible>
    </StyledExpandableGroup>
  );
};

export default ExpandableGroup;
