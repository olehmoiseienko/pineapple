import React, { memo } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import { NodePort } from "../../../models/NodePort";

const CustomNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  const { sources, targets } = data;
  return (
    <div className="react-flow__node-default_">
      {sources.map((port: NodePort) => (
        <div key={port.id} title={port.name}>
          <Handle
            id={port.id}
            style={{ left: port.left }}
            type="source"
            position={targetPosition}
            isConnectable={isConnectable}
          />
        </div>
      ))}

      {targets.map((port: NodePort) => (
        <div key={port.id} title={port.name}>
          <Handle
            id={port.id}
            style={{ left: port.left }}
            type="target"
            position={sourcePosition}
            isConnectable={isConnectable}
          />
        </div>
      ))}
      {data?.label}
    </div>
  );
};

CustomNode.displayName = "CustomNode";

export default memo(CustomNode);
