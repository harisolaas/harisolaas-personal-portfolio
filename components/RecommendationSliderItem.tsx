import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Direction } from "./Slider";

interface Props {
  direction?: Direction;
  slideOut?: boolean;
  endTransition?: () => void;
}

const ListItem = styled.li<{ left: string }>`
  left: ${({ left }) => left};
  position: relative;
  transition: all 0.3s linear;
  width: 100%;
`;

const RecommendationItem: FC<Props> = ({
  children,
  direction,
  endTransition,
  slideOut,
}) => {
  const [left, setLeft] = useState(`${direction ? "-" : ""}100%`);
  useEffect(() => {
    setLeft("0");
  }, []);
  useEffect(() => {
    slideOut && setLeft(`${direction ? "" : "-"}100%`);
  }, [slideOut]);

  return (
    <ListItem left={left} onTransitionEnd={endTransition}>
      {children}
    </ListItem>
  );
};

export default RecommendationItem;
