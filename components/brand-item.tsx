import React from "react";
import styled from "styled-components";
import AnimatedClick from "../components/animated-click";
import { useResponsiveWidth } from "../utils/hooks";
import media from "../utils/media-queries";
import {
  calculateTypographyDimentions,
  TypographyDimentions,
} from "../utils/typography-dimentions";

const BrandName = styled.div<TypographyDimentions>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: bold;
  line-height: ${({ lineHeight }) => lineHeight};
  text-transform: uppercase;
`;
const Item = styled.li`
  border-radius: 8px;
  box-shadow: -2px 2px 3px 2px ${({ theme }) => theme.colors.shadow};
  font-size: 0.7rem;
  height: 114px;
  margin: 16px 0;
  padding: 8px;
  width: 45%;
  :hover {
    box-shadow: inset -2px 2px 3px 2px ${({ theme }) => theme.colors.shadow};
  }
  ${media("medium")`
    font-size: 1rem;
    height: 120px;
    margin: 16px;
    width: 180px;
  `}
`;

interface BrandItemProps {
  brand: string;
  url: string;
}
const BrandItem: React.FC<BrandItemProps> = ({ brand, url }) => {
  const itemRef = React.useRef();
  const width = useResponsiveWidth(itemRef) - 16;
  const typographyDimentions = React.useMemo(
    () =>
      calculateTypographyDimentions(
        {
          height: 84,
          width,
        },
        brand
      ),
    [brand, width]
  );

  return (
    <Item ref={itemRef}>
      <a href={`https://${url}/`} target="_blank" rel="noopener noreferrer">
        <BrandName {...typographyDimentions}>{brand}</BrandName>
        <AnimatedClick>{url}</AnimatedClick>
      </a>
    </Item>
  );
};

export default BrandItem;
