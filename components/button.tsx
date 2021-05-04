import styled from "styled-components";
import AnimatedClick from "./animated-click";

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 12px 24px;
  text-transform: uppercase;
  :focus {
    border-color: ${({ theme }) => theme.colors.firefly};
    outline-style: solid;
  }
  :hover {
    cursor: pointer;
  }
`;

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...otherProps
}) => {
  return (
    <StyledButton {...otherProps}>
      <AnimatedClick>{children}</AnimatedClick>
    </StyledButton>
  );
};

export default Button;
