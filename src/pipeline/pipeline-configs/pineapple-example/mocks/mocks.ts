export const edges = [
  {
    id: "reactflow__edge-31-21",
    source: "3",
    sourceHandle: "1",
    target: "2",
    targetHandle: "1",
  },
  {
    id: "reactflow__edge-11-31",
    source: "1",
    sourceHandle: "1",
    target: "3",
    targetHandle: "1",
  },
  {
    id: "reactflow__edge-41-22",
    source: "4",
    sourceHandle: "1",
    target: "2",
    targetHandle: "2",
  },
  {
    id: "reactflow__edge-12-41",
    source: "1",
    sourceHandle: "2",
    target: "4",
    targetHandle: "1",
  },
];

export const nodes = [
  {
    id: "2",
    type: "output",
    data: {
      label: "Output",
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
    position: { x: 150, y: 0 },
  },
  {
    id: "1",
    type: "input",
    data: {
      label: "Input",
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
    position: { x: 150, y: 150 },
  },
  {
    id: "3",
    type: "eu-pineapple",
    data: {
      label: "eu-pineapple 1",
      targets: [
        {
          id: "1",
          name: "Port1",
          left: "50%",
        },
      ],
      sources: [
        {
          id: "1",
          name: "Port1",
          left: "50%",
        },
      ],
    },
    position: { x: 0, y: 75 },
  },
  {
    id: "4",
    type: "eu-banana",
    data: {
      label: "eu-banana 1",
      targets: [
        {
          id: "1",
          name: "Port1",
          left: "50%",
        },
      ],
      sources: [
        {
          id: "1",
          name: "Port1",
          left: "50%",
        },
      ],
    },
    position: { x: 300, y: 75 },
  },
];
