import React, { ChangeEventHandler } from "react";
import StyledFilter from "./StyledFilter";
import StyledInput from "./StyledInput";

function debounce(func: any, timeout = 300) {
  let timer: any;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // @ts-ignore
      func.apply(this, args);
    }, timeout);
  };
}

interface Props {
  onFilter: any;
}

const Filter = ({ onFilter }: Props) => {
  const onChangeHandler = debounce((e: any) => onChange(e));

  const onChange: ChangeEventHandler = (e) => {
    // @ts-ignore
    const { value } = e.target;
    onFilter(value);
  };

  return (
    <StyledFilter>
      <StyledInput onChange={onChangeHandler} placeholder="filter nodes" />
    </StyledFilter>
  );
};

export default Filter;
