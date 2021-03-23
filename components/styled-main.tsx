import styled from "styled-components";
import { globalPadding } from "../styles/mixins";

export default styled.main`
  ${globalPadding}
  flex-grow: 1;
  margin-top: ${({ theme }) => theme.headerHeight};
  margin-bottom: ${({ theme }) => theme.footerHeight};
  min-height: 280px;
`;
