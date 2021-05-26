import styled from "styled-components";

interface ToggleNavButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isNavOpen: boolean;
}
const Button = styled.button<ToggleNavButtonProps>`
  --size: 32px;
  background: unset;
  border: unset;
  filter: url(#round);
  outline: unset;
  padding: 0;
  position: relative;
  &,
  > span {
    height: var(--size);
    width: var(--size);
  }
  > span {
    background-color: ${({ theme }) => theme.colors.primary};
    left: 0;
    position: absolute;
    top: 0;
    transition: all 0.3s;
  }
  > span:first-child {
    clip-path: polygon(
      ${({ isNavOpen }) =>
        isNavOpen
          ? "25% 15%, 50% 40%, 75% 15%, 85% 25%, 50% 60%, 15% 25%"
          : "0% 15%, 50% 15%, 100% 15%, 100% 25%, 50% 25%, 0 25%"}
    );
  }
  > span:nth-child(2) {
    clip-path: polygon(
      ${({ isNavOpen }) =>
        isNavOpen
          ? "50% 50%, 50% 50%, 50% 50%, 50% 50%"
          : "0 45%, 100% 45%, 100% 55%, 0 55%"}
    );
  }
  > span:last-child {
    clip-path: polygon(
      ${({ isNavOpen }) =>
        isNavOpen
          ? "15% 75%, 50% 40%, 85% 75%, 75% 85%, 50% 60%, 25% 85%"
          : "0 75%, 50% 75%, 100% 75%, 100% 85%, 50% 85%, 0 85%"}
    );
  }
`;

const ToggleNavButton: React.FC<ToggleNavButtonProps> = (props) => (
  <Button {...props}>
    <span />
    <span />
    <span />
  </Button>
);

export default ToggleNavButton;
