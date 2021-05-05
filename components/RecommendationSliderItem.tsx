import React from "react";
import styled from "styled-components";

interface Props {
  width?: number;
}

const ListItem = styled.li<{ width: number }>`
  display: inline-block;
  width: ${({ width }) => width}px;
`;

const RecommendationItem: React.FC<Props> = ({ children, width }) => {
  return <ListItem width={width}>{children}</ListItem>;
};

export default RecommendationItem;
