import React, { useState, useEffect, memo } from "react";
import { Node } from "reactflow";
import { useUpdateNodeInternals } from "reactflow";
import {
  StyledEditPanel,
  StyledEditPanelInfo,
  StyledEditPanelDelete,
} from "../../../styled/StyledEditPanel";
import StyledInput from "../../../../shared/StyledInput";
import StyledButton, { ButtonType } from "../../../../shared/StyledButton";
import { NodePort } from "../../../models/NodePort";
import StyledIconicButton from "../../../../shared/StyledIconicButton";

interface Props {
  editableNode: Node;
  onNodeChange: (node: Node) => void;
  onNodeDelete: (node: Node) => void;
  pipelinePreferences: any;
}

enum PortTypePath {
  SOURCES = "sources",
  TARGETS = "targets",
}

const EditPanel = ({ editableNode, onNodeChange, onNodeDelete, pipelinePreferences }: Props) => {
  const [node, setNode] = useState(editableNode);
  const updateNodeInternals = useUpdateNodeInternals();

  useEffect(() => {
    setNode(editableNode);
  }, [editableNode]);

  useEffect(() => {
    onNodeChange(node);
  }, [node, onNodeChange]);

  const onNameChange = (value: string) => {
    console.log(value);
    setNode((prevNode: Node) => {
      prevNode.data.label = value;
      return {
        ...prevNode,
        data: {
          ...prevNode.data,
          label: value,
        },
      };
    });
  };

  const _onPortChange = (
    value: string,
    id: string,
    portTypePath: PortTypePath
  ) => {
    setNode((prevNode: Node) => {
      prevNode.data[portTypePath] = prevNode.data[portTypePath].map(
        (p: NodePort) => {
          if (p.id === id) {
            p.name = value;
          }
          return p;
        }
      );
      return {
        ...prevNode,
        data: {
          ...prevNode.data,
        },
      };
    });
  };

  const onSourcePortChange = (value: string, id: string) => {
    _onPortChange(value, id, PortTypePath.SOURCES);
  };

  const onTargetPortChange = (value: string, id: string) => {
    _onPortChange(value, id, PortTypePath.TARGETS);
  };

  const _getId = (arr: NodePort[]) => {
    if (arr.length === 0) return 1;
    const lastPort = arr.slice(-1)[0];
    return (parseInt(lastPort.id) + 1).toString();
  };

  const _onAddPort = (portTypePath: PortTypePath) => {
    setNode((prevNode: Node) => {
      const id = _getId(prevNode.data[portTypePath]);
      prevNode.data[portTypePath].push({ id, name: `Port ${id}` });

      const length = prevNode.data[portTypePath].length;
      const initPosition = 100 / (length * 2);
      const step = length === 1 ? 100 : 100 / length;
      console.log("initPosition", initPosition);
      console.log("step", step);

      prevNode.data[portTypePath].forEach((p: NodePort, index: number) => {
        p.left = `${initPosition + step * index}%`;
      });

      updateNodeInternals(editableNode.id);

      return {
        ...prevNode,
        data: {
          ...prevNode.data,
        },
      };
    });
  };

  const onAddSourcePort = () => {
    _onAddPort(PortTypePath.SOURCES);
  };

  const onAddTargetPort = () => {
    _onAddPort(PortTypePath.TARGETS);
  };

  const _onRemovePort = (id: string, portTypePath: PortTypePath) => {
    setNode((prevNode: Node) => {
      prevNode.data[portTypePath] = prevNode.data[portTypePath].filter(
        (port: NodePort) => port.id !== id
      );
      return {
        ...prevNode,
        data: {
          ...prevNode.data,
        },
      };
    });
  };

  const onRemoveSourcePort = (id: string) => {
    _onRemovePort(id, PortTypePath.SOURCES);
  };

  const onRemoveTargetPort = (id: string) => {
    _onRemovePort(id, PortTypePath.TARGETS);
  };

  const onDeleteHandler = () => {
    onNodeDelete(node);
  };

  const isSourceAddButtonDisabled = pipelinePreferences.maxPorts <= node.data.sources.length;
  const isTargetButtonDisabled = pipelinePreferences.maxPorts <= node.data.targets.length;

  return (
    <StyledEditPanel>
      <h2>Selected Node</h2>

      <StyledEditPanelInfo>
        <label>ID:</label>
        <span>{node.id}</span>

        <label>Type:</label>
        <span>{node.type}</span>
        *{pipelinePreferences.maxPorts}
        <label>Name:</label>
        <StyledInput
          value={node.data.label}
          onChange={(evt) => onNameChange(evt.target.value)}
        />

        <label>
          Sources:  (MAX: {pipelinePreferences.maxPorts})
          <StyledIconicButton disabled={isSourceAddButtonDisabled} onClick={() => onAddSourcePort()}>+</StyledIconicButton>
        </label>

        {node.data.sources.map((port: NodePort) => (
          <p key={port.id}>
            <StyledInput
              key={port.id}
              value={port.name}
              onChange={(evt) => onSourcePortChange(evt.target.value, port.id)}
            />
            <StyledIconicButton onClick={() => onRemoveSourcePort(port.id)}>x</StyledIconicButton>
          </p>
        ))}

        <label>
          Targets: (MAX: {pipelinePreferences.maxPorts})
          <StyledIconicButton disabled={isTargetButtonDisabled} onClick={() => onAddTargetPort()}>+</StyledIconicButton>
        </label>
        {node.data.targets.map((port: NodePort) => (
          <p key={port.id}>
            <StyledInput
              key={port.id}
              value={port.name}
              onChange={(evt) => onTargetPortChange(evt.target.value, port.id)}
            />
            <StyledIconicButton onClick={() => onRemoveTargetPort(port.id)}>x</StyledIconicButton>
          </p>
        ))}
      </StyledEditPanelInfo>

      <StyledEditPanelDelete>
        <StyledButton buttonType={ButtonType.ERROR} onClick={onDeleteHandler}>
          DELETE NODE
        </StyledButton>
      </StyledEditPanelDelete>
    </StyledEditPanel>
  );
};

export default memo(EditPanel);
