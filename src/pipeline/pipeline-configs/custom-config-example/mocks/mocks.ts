export const edges = [
  {
    id: "reactflow__edge-11-21",
    source: "1",
    sourceHandle: "1",
    target: "2",
    targetHandle: "1",
  },
  {
    id: "reactflow__edge-12-22",
    source: "1",
    sourceHandle: "2",
    target: "2",
    targetHandle: "2",
  },
];

export const nodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Input node",
      targets: [],
      sources: [
        {
          id: "1",
          name: "Port1",
          left: "25%",
        },
        {
          id: "2",
          name: "Port2",
          left: "75%",
        },
      ],
    },
    position: { x: 250, y: 150 },
  },
  {
    id: "2",
    type: "output",
    data: {
      label: "Output node",
      targets: [
        {
          id: "1",
          name: "Port1",
          left: "25%",
        },
        {
          id: "2",
          name: "Port2",
          left: "75%",
        },
      ],
      sources: [],
    },
    position: { x: 250, y: 5 },
  },
];
