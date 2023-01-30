import React, { useState, useEffect } from "react";
import { Node } from "reactflow";
import {
  StyledEditPanel,
  StyledEditPanelInfo,
  StyledEditPanelDelete,
} from "../styled/StyledEditPanel";
import StyledInput from "../../shared/StyledInput";
import StyledButton, { ButtonType } from "../../shared/StyledButton";

interface Props {
  editableNode: Node;
  onNodeChange: (node: Node) => void;
  onNodeDelete: (node: Node) => void;
}

const EditPanel = ({ editableNode, onNodeChange, onNodeDelete }: Props) => {
  const [node, setNode] = useState(editableNode);

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

  const onDeleteHandler = () => {
    onNodeDelete(node);
  };

  return (
    <StyledEditPanel>
      <h2>Selected Node</h2>

      <StyledEditPanelInfo>
        <label>ID:</label>
        <span>{node.id}</span>

        <label>Type:</label>
        <span>{node.type}</span>

        <label>Name:</label>
        <StyledInput
          value={node.data.label}
          onChange={(evt) => onNameChange(evt.target.value)}
        />
      </StyledEditPanelInfo>

      <StyledEditPanelDelete>
        <StyledButton buttonType={ButtonType.ERROR} onClick={onDeleteHandler}>
          DELETE NODE
        </StyledButton>
      </StyledEditPanelDelete>
    </StyledEditPanel>
  );
};

export default EditPanel;
