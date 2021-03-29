import styled from "styled-components";
import { FC } from "react";
import { firefly, fireflyAnimationFinalPosition } from "../styles/mixins";

const Wrapper = styled.span`
  ::after {
    ${firefly}
    content: "";
    left: 50%;
    opacity: 1;
    position: absolute;
    top: 50%;
    transition: all 0.5s ease-out, opacity 0.3s;
    transform: rotate(0deg) translateX(10px) rotate(0deg) scale(0);
  }
  :active {
    opacity: 0.9;
    ::after {
      opacity: 0;
    }
  }
  :hover {
    color: ${({ theme }) => theme.colors.firefly};
    cursor: pointer;
    text-shadow: ${({ theme }) => theme.textShadow};
    ::after {
      ${fireflyAnimationFinalPosition};
    }
  }
`;
const Container = styled.span`
  position: relative;
`;

const AnimatedClick: FC = ({ children, ...otherProps }) => {
  return (
    <Container {...otherProps}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default AnimatedClick;
