import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import { useSafeReducer, Reducer } from "../utils/hooks";

export type Direction = 0 | 1;
interface State {
  activeIndex: number;
  direction: Direction;
  prevIndex: null | number;
  slidingOut: boolean;
}

const reducer: Reducer<State> = (state, action) => {
  switch (action.type) {
    case "SLIDE_TO_INDEX":
      const { index, direction } = action;

      return {
        ...state,
        activeIndex: index,
        direction: direction,
        prevIndex: state.activeIndex,
        slidingOut: true,
      };
    case "SLIDE_OUT_END":
      return { ...state, slidingOut: false };

    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};

const List = styled.ul`
  list-style: none;
  overflow: hidden;
  padding: 0;
`;

const RecommendationsSlider: FC = ({ children }) => {
  const [state, dispatch] = useSafeReducer(reducer, {
    activeIndex: 0,
    direction: null,
    prevIndex: null,
    slidingOut: false,
  });
  const { activeIndex, direction, prevIndex, slidingOut } = state;

  const slideToIndex = (index: number, direction: Direction) => {
    dispatch({ type: "SLIDE_TO_INDEX", index, direction });
  };
  const handleSlide = (index: number) => {
    let direction: Direction = index - activeIndex > 0 ? 0 : 1;
    if (index > React.Children.count(children) - 1) {
      index = 0;
      direction = 0;
    }
    if (index < 0) {
      index = React.Children.count(children) - 1;
      direction = 1;
    }

    slideToIndex(index, direction);
  };
  const slideOutEnd = () => {
    dispatch({ type: "SLIDE_OUT_END" });
  };

  return (
    <List>
      {React.Children.map(children, (child, index) => {
        if (!slidingOut && activeIndex === index) {
          return React.cloneElement(child as ReactElement, { direction });
        }
        if (slidingOut && prevIndex === index) {
          return React.cloneElement(child as ReactElement, {
            direction,
            slideOut: true,
            endTransition: slideOutEnd,
          });
        }
      })}
      {/* TODO: Add accessibility */}
      <button onClick={() => handleSlide(activeIndex - 1)}>Previous</button>
      <button onClick={() => handleSlide(activeIndex + 1)}>Next</button>
      {React.Children.map(children, (_, index) => (
        <button
          disabled={index === activeIndex}
          key={index}
          onClick={() => handleSlide(index)}
        >
          {index}
        </button>
      ))}
    </List>
  );
};

export default RecommendationsSlider;
