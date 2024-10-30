import { StyledWrapper } from "./style.js";

export const Button = ({title}) => {
  return (
    <StyledWrapper>
      <button>{ title }</button>
    </StyledWrapper>
  );
}