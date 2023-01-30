import { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";

const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  return (
    <div className="react-flow__node-default">
      <Handle
        id="1"
        type="target"
        position={targetPosition}
        isConnectable={isConnectable}
      />
      <Handle
        id="3"
        type="source"
        position={sourcePosition}
        isConnectable={isConnectable}
      />
      {data?.label}
    </div>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
