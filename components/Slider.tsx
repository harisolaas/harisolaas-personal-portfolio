import React from "react";
import styled from "styled-components";
import { ButtonNext, ButtonPrev } from "./button-prev-next";
import ButtonPlayPause from "./button-play-pause";
// TODO: check if safe reducer is needed
import { useSafeReducer, Reducer } from "../utils/hooks";

export type Direction = 0 | 1;
interface State {
  activeIndex: number;
  autoplay: boolean;
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
    case "TOGGLE_AUTOPLAY":
      return { ...state, autoplay: !state.autoplay };

    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};

const ControlButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: 280px;
`;
const List = styled.ul`
  list-style: none;
  overflow: hidden;
  padding: 0;
`;
const NavigationButton = styled.button`
  border: none;
  border-radius: 50%;
  color: transparent;
  height: 12px;
  margin: 8px;
  overflow: hidden;
  padding: 0;
  width: 12px;
`;
const ProgressBar = styled.div<{ collapse: boolean; slidingOut: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary}55;
  border-radius: 2px;
  height: ${({ collapse }) => (collapse ? "0px" : "4px")};
  margin: 12px 0;
  overflow: hidden;
  position: relative;
  transition: height 0.5s;
  width: 100%;
  ::after {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    content: "";
    height: 4px;
    left: 0;
    position: absolute;
    top: 0;
    transition: width 4.5s linear;
    width: 100%;
    ${({ slidingOut }) => (slidingOut ? "transition: width 0s; width: 0%" : "")}
  }
`;
const SliderProgressWrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

const RecommendationsSlider: React.FC = ({ children }) => {
  const [state, dispatch] = useSafeReducer(reducer, {
    activeIndex: 0,
    autoplay: true,
    direction: null,
    prevIndex: null,
    slidingOut: false,
  });
  const { activeIndex, autoplay, direction, prevIndex, slidingOut } = state;

  let { current: autoplayInterval } = React.useRef(null);
  React.useEffect(() => {
    if (autoplay) {
      autoplayInterval = setTimeout(() => {
        slideToNext();
      }, 5000);
    }
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [activeIndex, autoplay]);

  const slideToIndex = (index: number, direction: Direction) => {
    if (index === activeIndex) return;
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
  const slideToNext = () => {
    handleSlide(activeIndex + 1);
  };
  const slideOutEnd = () => {
    dispatch({ type: "SLIDE_OUT_END" });
  };
  const handleAutoplayToggle = () => {
    dispatch({ type: "TOGGLE_AUTOPLAY" });
  };

  return (
    <div>
      <List>
        {React.Children.map(children, (child, index) => {
          if (!slidingOut && activeIndex === index) {
            return React.cloneElement(child as React.ReactElement, {
              direction,
            });
          }
          if (slidingOut && prevIndex === index) {
            return React.cloneElement(child as React.ReactElement, {
              direction,
              slideOut: true,
              endTransition: slideOutEnd,
            });
          }
        })}
      </List>
      <SliderProgressWrapper>
        <div>
          {React.Children.map(children, (_, index) => (
            <NavigationButton
              disabled={index === activeIndex}
              key={index}
              onClick={() => handleSlide(index)}
            >
              Go to slide number {index + 1}
            </NavigationButton>
          ))}
        </div>
        <ProgressBar collapse={!autoplay} slidingOut={slidingOut} />
      </SliderProgressWrapper>
      <ControlButtons>
        <ButtonPrev onClick={() => handleSlide(activeIndex - 1)} />
        <ButtonPlayPause
          onClick={handleAutoplayToggle}
          status={autoplay ? "pause" : "play"}
        />
        <ButtonNext onClick={slideToNext} />
      </ControlButtons>
    </div>
  );
};

export default RecommendationsSlider;
