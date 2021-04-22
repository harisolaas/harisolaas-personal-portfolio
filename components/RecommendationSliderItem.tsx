import { FC, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { SliderItem } from "./Slider";
import Text from "./styled-text";

type Props = SliderItem & {
  author: string;
  company: string;
  message: string;
  position: string;
  transform?: boolean;
};

const ListItem = styled.li`
  width: 100%;
`;
const StyledCharacter = styled.span<{ transform: boolean }>`
  color: ${({ theme, transform }) =>
    transform ? theme.colors.firefly : "inherit"};
  clip-path: circle(${({ transform }) => (transform ? "2px" : "100%")});
  display: inline-block;
  min-width: 0px;
  position: relative;
  transition: all 0.8s 1s;
  ::after {
    background-color: ${({ theme }) => theme.colors.firefly};
    border-radius: 50%;
    box-shadow: 0px 0 2rem 1rem ${({ theme }) => theme.colors.firefly};
    clip-path: circle(500%);
    content: "";
    height: 5px;
    left: calc(50% - 2.5px);
    opacity: 0;
    position: absolute;
    top: calc((1.5rem - 5px) / 2);
    transition: all 1s 1s;
    width: 5px;
  }

  ${({ transform }) => transform && transformedStyles}
`;

const transformedStyles = css`
  ::after {
    clip-path: circle(2px);
    opacity: 1;
  }
`;

const Character: FC<{ transform: boolean }> = ({ children, transform }) => {
  const { current: ref } = useRef();

  return (
    <StyledCharacter ref={ref} transform={transform}>
      {children}
    </StyledCharacter>
  );
};

const RecommendationItem: FC<Props> = ({
  message,
  // direction,
  endTransition,
  slideOut,
  // transform,
}) => {
  const [transform, setTransform] = useState(true);
  useEffect(() => {
    setTransform(false);
  }, []);
  useEffect(() => {
    slideOut && setTransform(true);
  }, [slideOut]);

  return (
    <ListItem onTransitionEnd={endTransition}>
      <Text>
        {message.split("").map((c, i) =>
          c === " " ? (
            c
          ) : (
            <Character key={i} transform={transform}>
              {c}
            </Character>
          )
        )}
      </Text>
    </ListItem>
  );
};

export default RecommendationItem;
