export const initNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "input node" },
    position: { x: 250, y: 5 },
  },
  {
    id: "2",
    type: "xxx",
    data: { label: "xxxx node" },
    position: { x: 250, y: 150 },
  },
];

export const initEdges = [
  {
    id: "reactflow__edge-1-2",
    source: "1",
    sourceHandle: null,
    target: "2",
    label: "bezier edge (default)",
    className: "normal-edge",
  },
];
