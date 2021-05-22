import Image from "next/image";
import React from "react";
import styled from "styled-components";
import H1 from "../components/styled-h1";
import Layout from "../components/layout";
import Main from "../components/styled-main";
import Text from "../components/styled-text";
import { defaultText } from "../styles/mixins";
import Dodecahedron from "../components/dodecahedron";
import media from "../utils/media-queries";

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
const DodecahedronContainer = styled.div`
  grid-column-start: 3;
  grid-row: 1 / 3;
`;
const List = styled.ul`
  flex-wrap: wrap;
  grid-column: 1 / 3;
  list-style: none;
  margin: 0 -12px;
  padding: 0;
`;
const ListGrid = styled.div`
  display: grid;
  ${media("medium")`
    grid-template-columns: 3fr 2fr 8fr;
    grid-template-rows: 5fr 3fr;
  `}
`;
const ListItem = styled.li`
  float: left;
  padding: 12px;
`;
const TechButton = styled.button<{ active: boolean }>`
  ${defaultText}
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.primary};
  cursor: pointer;
  font-size: 1.2rem;
  padding: 12px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 0 5px 0.5px ${({ theme }) => theme.colors.firefly};
  }
`;

export default function Skills(): JSX.Element {
  const [activeTechIndex, setActiveTechIndex] = React.useState(0);
  const handleTechChange = (index: number) => setActiveTechIndex(index);
  return (
    <Layout title="Skills">
      <Main>
        <H1>Skills</H1>
        <Text>
          I'm your <strong>Java Script</strong> specialist, I love to find
          simple solutions to complex challenges. The main languages and
          technologies I work with are:
        </Text>
        <ListGrid>
          <List>
            {technologies.map((technology, index) => (
              <ListItem key={technology}>
                <TechButton
                  active={index === activeTechIndex}
                  onClick={() => handleTechChange(index)}
                >
                  {technology}
                </TechButton>
              </ListItem>
            ))}
          </List>
          <DodecahedronContainer>
            <Dodecahedron
              activeLabelIndex={activeTechIndex}
              labels={technologies}
              onFaceClick={handleTechChange}
            />
          </DodecahedronContainer>
          <div>
            <Image
              src="/images/tapir.webp"
              alt="Tapir illustration"
              height={250}
              priority
              width={259}
            />
          </div>
        </ListGrid>
      </Main>
    </Layout>
  );
}
