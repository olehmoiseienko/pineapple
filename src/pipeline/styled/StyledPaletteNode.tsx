import styled from "styled-components";

const StyledPaletteNode = styled.div`
  margin: 5px 10px;
  height: 20px;
  padding: 4px;
  display: flex;
  border: 2px dashed var(--node-border-color);
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: move;

  &:hover {
    border: 2px dashed var(--node-hover-border-color);
  }
`;

export default StyledPaletteNode;
