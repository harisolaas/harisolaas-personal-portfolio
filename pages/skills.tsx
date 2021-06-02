import Head from "next/head";
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
  grid-row: 1 / 2;
  margin-bottom: 12px;
  ${media("medium")`
    grid-column-start: 3;
    grid-row: 1 / 3;
    margin-bottom: 0;
  `}
`;
const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0 -12px 12px;
  padding: 0;
  ${media("medium")`
    display: block;
    grid-column: 1 / 3;
    margin-bottom: 0;
  `}
`;
const ListGrid = styled.div`
  display: grid;
  ${media("medium")`
    grid-template-columns: 3fr 2fr 8fr;
    grid-template-rows: 5fr auto;
    margin-top: 24px;
  `}
`;
const ListItem = styled.li`
  padding: 8px;
  ${media("medium")`
    float: left;
    padding: 12px;
  `}
`;
const Tapir = styled.div`
  margin: 24px auto 0;
  max-width: 176px;
  ${media("medium")`
    margin: unset;
    max-width: unset;
  `}
`;
const TechButton = styled.button<{ active: boolean }>`
  ${defaultText}
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.primary};
  cursor: pointer;
  font-size: 1rem;
  padding: 4px 8px;
  transition: all 0.3s;
  :hover {
    box-shadow: 0px 0 5px 0.5px ${({ theme }) => theme.colors.firefly};
  }
  ${media("medium")`
    border-radius: 8px;
    font-size: 1.2rem;
    padding: 12px;
  `}
`;

export default function Skills(): JSX.Element {
  const [activeTechIndex, setActiveTechIndex] = React.useState(0);
  const handleTechChange = (index: number) => setActiveTechIndex(index);
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="Skills: I'm your Java Script specialist."
        />
        <meta
          property="og:description"
          content="I love to find simple solutions to complex challenges. The main languages and technologies I work with are: React JS, Node JS, TypeScript, Vanilla Java Script, Jest, Redux, Immutable, GraphQL, HTML5, CSS3, SCSS and React Native."
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}skills`}
        />
        <meta property="og:image" content="/images/tapir-OG.jpg" />
      </Head>
      <Layout title="Skills">
        <Main>
          <H1>Skills</H1>
          <Text>
            I'm your <strong>Java Script specialist</strong>, I love to find
            simple solutions to complex challenges.
            <br />
            The main languages and technologies I work with are:
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
            <Tapir>
              <Image
                src="/images/tapir.webp"
                alt="Tapir illustration"
                height={250}
                priority
                width={259}
              />
            </Tapir>
          </ListGrid>
        </Main>
      </Layout>
    </>
  );
}
