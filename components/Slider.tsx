import React from "react";
import styled, { css } from "styled-components";
import { ButtonNext, ButtonPrev } from "./button-prev-next";
import ButtonPlayPause from "./button-play-pause";
import { useResponsiveWidth } from "../utils/hooks";

const ControlButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  max-width: 280px;
`;
const Frame = styled.div`
  width: 100%;
  overflow: hidden;
`;
const List = styled.ul<{ activeIndex: number; itemWidth: number }>`
  list-style: none;
  overflow: hidden;
  padding: 0;
  transform: translateX(
    -${({ activeIndex, itemWidth }) => activeIndex * itemWidth}px
  );
  transition: all 1s;
  width: max-content;
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
  :disabled {
    background-color: ${({ theme }) => theme.colors.primaryOff};
  }
`;
const Progressbar = styled.div<{ collapse: boolean; reset: boolean }>`
  background-color: ${({ theme }) => theme.colors.primaryOff};
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
    transition: width 4.7s linear;
    width: 100%;
    ${({ reset }) => reset && resetProgressStyles};
  }
`;
const resetProgressStyles = css`
  transition: width 0.1s;
  width: 0%;
`;
const SliderProgressWrapper = styled.div`
  margin: auto;
  width: fit-content;
`;

const RecommendationsSlider: React.FC = ({ children }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);
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

  const frameRef = React.useRef();
  const width = useResponsiveWidth(frameRef);

  const [shouldResetProgressbar, setShouldResetProgressbar] = React.useState(
    true
  );
  React.useEffect(() => {
    setShouldResetProgressbar(false);
  }, []);

  const handleSlide = (index: number) => {
    if (index > React.Children.count(children) - 1) {
      index = 0;
    }
    if (index < 0) {
      index = React.Children.count(children) - 1;
    }
    setActiveIndex(index);
    resetProgressbar();
  };
  const slideToNext = () => {
    handleSlide(activeIndex + 1);
  };
  const handleToggleAutoplay = () => {
    setAutoplay(!autoplay);
    setShouldResetProgressbar(autoplay);
  };
  const resetProgressbar = () => {
    setShouldResetProgressbar(true);
    setTimeout(() => {
      setShouldResetProgressbar(false);
    }, 100);
  };

  return (
    <div>
      <Frame ref={frameRef}>
        <List activeIndex={activeIndex} itemWidth={width}>
          {width &&
            React.Children.map(children, (child, index) => {
              return React.cloneElement(child as React.ReactElement, {
                key: index,
                width,
              });
            })}
        </List>
      </Frame>
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
        <Progressbar collapse={!autoplay} reset={shouldResetProgressbar} />
      </SliderProgressWrapper>
      <ControlButtons>
        <ButtonPrev onClick={() => handleSlide(activeIndex - 1)} />
        <ButtonPlayPause
          onClick={handleToggleAutoplay}
          status={autoplay ? "pause" : "play"}
        />
        <ButtonNext onClick={slideToNext} />
      </ControlButtons>
    </div>
  );
};

export default RecommendationsSlider;
