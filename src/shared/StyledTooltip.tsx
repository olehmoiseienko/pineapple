import styled from "styled-components";

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */

  > .tooltip-content {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
    z-index: 1;
  }

  &:hover > .tooltip-content {
    visibility: visible;
  }
`;

export default StyledTooltip;
