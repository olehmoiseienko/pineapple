import styled from "styled-components";

export const StyledEditPanel = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  border-right: 1px solid var(--main-shadow-color);
  padding: 0 10px;
  font-size: 14px;
  background: var(--main-bg-color);
  overflow-y: auto;
`;

export const StyledEditPanelInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  border-right: 1px solid var(--main-shadow-color);
  overflow-y: auto;

  label {
    font-size: 14px;
    font-weight: bold;
    margin: 15px 0 5px;
  }
`;

export const StyledEditPanelDelete = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  border-right: 1px solid var(--main-shadow-color);
  font-size: 12px;
`;
