import { BaseNode } from "../../models/Node";

const defaultPort = {
  id: "1",
  name: "Port 1",
  left: "50%",
};

export const nodeCreator = ({ id, type, position }: any): BaseNode => {
  const data = {
    label: `${type} ${id}`,
    sources: [defaultPort],
    targets: [defaultPort],
  };

  return new BaseNode(id, type, position, data);
};
