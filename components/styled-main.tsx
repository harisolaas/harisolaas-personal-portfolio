import styled from "styled-components";
import { globalPadding } from "../styles/mixins";

export default styled.main`
  ${globalPadding}
  flex-grow: 1;
  padding-top: ${({ theme }) => theme.headerHeight}px;
  margin-bottom: ${({ theme }) => theme.footerHeight}px;
  min-height: 280px;
  min-height: calc(
    100vh - ${({ theme }) => theme.headerHeight + theme.footerHeight}px
  );
  padding-bottom: 16px;
`;
