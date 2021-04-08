import { FC, useEffect, useRef } from "react";
import styled from "styled-components";
import { firefly } from "../styles/mixins";

const StyledFirefly = styled.div<{
  left: number;
  top: number;
}>`
  ${firefly}
  left: ${({ left }) => left}px;
  position: absolute;
  top: ${({ top }) => top}px;
  transition: all 2s linear;
`;

type FireflyProps = { moveTo: [number, number] };
const Firefly: FC<FireflyProps> = ({ moveTo }) => {
  const ref = useRef({} as HTMLDivElement);
  useEffect(() => {
    const firefly = ref.current;
    const handleTransitionStart = () => {
      firefly.style.animation = `meander 1s infinite linear`;
    };
    const handleTransitionEnd = () => {
      firefly.style.animation = undefined;
    };
    if (firefly.addEventListener) {
      firefly.addEventListener("transitionstart", handleTransitionStart);
      firefly.addEventListener("transitionend", handleTransitionEnd);
    }

    return () => {
      firefly.removeEventListener("transitionstart", handleTransitionStart);
      firefly.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);
  const [left, top] = moveTo;

  return <StyledFirefly left={left} top={top} ref={ref} />;
};

export default Firefly;
