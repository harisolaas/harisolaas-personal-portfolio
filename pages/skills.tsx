import styled from "styled-components";
import H1 from "../components/h1";
import Layout from "../components/layout";
import Main from "../components/main";
import Text from "../components/text";
import { defaultText } from "../styles/mixins";

const List = styled.ul`
  ${defaultText}
  line-height: 1.5;
`;

export default function Skills(): JSX.Element {
  return (
    <Layout title="Skills">
      <Main>
        <H1>Skills</H1>
        <Text>
          I'm your <strong>Java Script</strong> specialist, I love to find
          simple solutions to complex challenges. The main languages and
          technologies I work with are:
        </Text>
        <List>
          <li>React JS</li>
          <li>TypeScript</li>
          <li>Jest</li>
          <li>Redux</li>
          <li>Immutable</li>
          <li>Node JS</li>
          <li>React Native</li>
          <li>GraphQL</li>
          <li>Vanilla Java Script</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>SCSS</li>
        </List>
      </Main>
    </Layout>
  );
}
