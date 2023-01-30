import styled from "styled-components";

// overrides for "react-collapsible" component
const StyledExpandableGroup = styled.div`
  .Collapsible {
    padding: 15px 0;
    border-bottom: 1px solid var(--main-border-color);
  }

  .Collapsible__trigger {
    position: relative;
    display: inline-block;
    width: 100%;
    line-height: 40px;
    text-align: left;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }

  .Collapsible__trigger::before {
    content: "\\25bc";
    top: 0;
    right: 22px;
    position: absolute;
    font-size: 6px;
  }

  .Collapsible__trigger::after {
    content: "\\25bc";
    top: 0;
    right: 22px;
    position: absolute;
    font-size: 6px;
    transform: rotate(180deg);
  }

  .Collapsible__trigger.is-open::before {
    display: none;
  }

  .Collapsible__trigger.is-closed::after {
    display: none;
  }
`;

export default StyledExpandableGroup;
