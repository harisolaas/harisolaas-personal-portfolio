import styled from "styled-components";
import AnimatedClick from "../components/animated-click";
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
  height: 120px;
  margin: 16px;
  padding: 8px;
  transition: all 0.5s;
  width: 180px;
  :hover {
    box-shadow: inset -2px 2px 3px 2px ${({ theme }) => theme.colors.shadow};
  }
`;

interface BrandItemProps {
  brand: string;
  url: string;
}
const BrandItem: React.FC<BrandItemProps> = ({ brand, url }) => {
  const typographyDimentions = calculateTypographyDimentions(
    {
      height: 84,
      width: 164,
    },
    brand
  );

  return (
    <Item>
      <a href={`https://${url}/`} target="_blank" rel="noopener noreferrer">
        <BrandName {...typographyDimentions}>{brand}</BrandName>
        <AnimatedClick>{url}</AnimatedClick>
      </a>
    </Item>
  );
};

export default BrandItem;
