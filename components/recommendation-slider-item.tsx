import React from "react";
import styled from "styled-components";

const ListItem = styled.li<{ width: number }>`
  display: inline-block;
  padding: 0 8px;
  width: ${({ width }) => width}px;
`;

interface RecommendationItemProps {
  width?: number;
}
const RecommendationItem: React.FC<RecommendationItemProps> = ({
  children,
  width,
}) => {
  return <ListItem width={width}>{children}</ListItem>;
};

export default RecommendationItem;
