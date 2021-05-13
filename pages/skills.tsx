import React from "react";
import styled from "styled-components";
import H1 from "../components/styled-h1";
import Layout from "../components/layout";
import Main from "../components/styled-main";
import Text from "../components/styled-text";
import { defaultText } from "../styles/mixins";
import Dodecahedron from "../components/dodecahedron";

const technologies = [
  "React JS",
  "Node JS",
  "TypeScript",
  "Vanilla Java Script",
  "Jest",
  "Redux",
  "Immutable",
  "GraphQL",
  "HTML5",
  "CSS3",
  "SCSS",
  "React Native",
];
const List = styled.ul``;
const ListItem = styled.li<{ active: boolean }>`
  ${defaultText}
  line-height: 1.5;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`;

export default function Skills(): JSX.Element {
  const [activeTechIndex, setActiveTechIndex] = React.useState(0);
  const handleTechChange = (index) => setActiveTechIndex(index);
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
          {technologies.map((technology, index) => (
            <ListItem
              active={index === activeTechIndex}
              key={technology}
              onClick={() => handleTechChange(index)}
            >
              {technology}
            </ListItem>
          ))}
        </List>

        <Dodecahedron
          activeLabelIndex={activeTechIndex}
          labels={technologies}
          onFaceClick={handleTechChange}
        />
      </Main>
    </Layout>
  );
}
