import React from "react";
import Image from "next/image";
import styled from "styled-components";
import AnimatedClick from "../components/animated-click";
import H1 from "../components/styled-h1";
import Layout from "../components/layout";
import Main from "../components/styled-main";
import Text from "../components/styled-text";
import media from "../utils/media-queries";

const Grid = styled.div`
  display: grid;
  ${media("large")`
    grid-template-columns: 50% 50%;
  `}
`;
const Email = styled.a`
  font-style: italic;
  font-weight: bold;
`;
const ImageContainer = styled.div`
  margin: 36px auto 0;
  ${media("medium")`
    margin: 48px auto 0;
    max-width: 60%;
  `}
  ${media("large")`
    display: flex;
    grid-row: 1 / 2;
    justify-content: flex-end;
    margin: 0 auto 0 0;
    max-width: unset;
  `}
`;
const TextContainer = styled.div`
  flex-flow: column;
  margin: 0 auto;
  max-width: 440px;
  text-align: center;
  ${media("large")`
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  `}
  h1 {
    margin-top: 48px;
    ${media("large")`
      margin-top: 108px;
    `}
  }
  ${Text} {
    ${media("medium")`
      font-size: 1.4rem;
      line-height: 1.9;
      margin: 0;
    `}
  }
`;

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact">
      <Main>
        <Grid>
          <TextContainer>
            <H1>Contact me!</H1>
            <Text>
              Want to get in touch? You can email me at
              <br />
              <Email href="mailto:dev@harisolaas.com">
                <AnimatedClick>dev@harisolaas.com</AnimatedClick>
              </Email>
              .<br />
              Or connect with me on LinkedIn
              <br />
              <Email
                href="https://www.linkedin.com/in/harisolaas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedClick>linkedin.com/in/harisolaas</AnimatedClick>
              </Email>
              .
            </Text>
          </TextContainer>
          <ImageContainer>
            <Image height={796} width={662} src="/images/oso-hormiguero.webp" />
          </ImageContainer>
        </Grid>
      </Main>
    </Layout>
  );
}
