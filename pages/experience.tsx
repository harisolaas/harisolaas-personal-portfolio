import Image from "next/image";
import styled from "styled-components";
import BrandItem from "../components/brand-item";
import H1 from "../components/styled-h1";
import H2 from "../components/styled-h2";
import Layout from "../components/layout";
import RecommendationItem from "../components/recommendation-slider-item";
import RecommendationsSlider from "../components/slider";
import DefaultMain from "../components/styled-main";
import Text from "../components/styled-text";
import media from "../utils/media-queries";
import React from "react";

const brandsAndCompanies = [
  { name: "Estée Lauder Companies", url: "elcompanies.com" },
  { name: "Nubi", url: "tunubi.com" },
  { name: "Estée Lauder", url: "esteelauder.com" },
  { name: "Art of Living", url: "artofliving.org" },
  { name: "Clinique", url: "clinique.com" },
  { name: "Dr. Jart", url: "drjart.com" },
  { name: "Glamglow", url: "glamglow.com" },
  { name: "Jo Malone", url: "jomalone.com" },
  { name: "GetMolo", url: "getmolo.com" },
  { name: "Agile Engine", url: "agileengine.com" },
  { name: "Redacción", url: "redaccion.com.ar" },
  { name: "Litebox", url: "litebox.ai" },
  { name: "Labtam", url: "labtam.org" },
  { name: "Smart Reporting", url: "smartreporting.io" },
  { name: "Guru Developers", url: "gurudevelopers.com.ar" },
  { name: "Alic", url: "alic.com.ar" },
  { name: "Chicos Uniformes", url: "chicosuniformes.com" },
];
const recommendationsData = [
  {
    author: "Agustín Sobral Rosada",
    company: "Gurudevelopers",
    message:
      "Hari quickly became known for both his technical strength, his ability to engage with clients, and his positive attitude. His front-end and back-end developments remain a reference within Gurudevelopers to this day. Working with him was very pleasant and he always came up with innovative solutions.\nWe were very lucky to have him on the team and I certainly look forward to working with him again.",
    position: "Co-founder",
  },
  {
    author: "Ernesto Garmendia",
    company: "Litebox",
    message:
      "I highly recommend Harald. He is undoubtedly a person who can empower any work group. I highlight his ability to learn, attention to detail, passion for work, commitment, creativity to solve problems, and his abilities to communicate. He is very complete in both hard and soft skills. At Litebox he developed and led projects, exceeding expectations.\nIn addition to being an excellent professional, above all, I highlight his human quality, his companionship, and the constant collaboration to generate a great climate and work environment.",
    position: "COO & Engineering VP",
  },
  {
    author: "Ramiro Saiz",
    company: "Alic SA",
    message:
      "I met Harald in the context of a complete digital transformation of the company, where we worked together from the beginning of the B2B wholesale eCommerce platform. A challenging project due to the cultural change of the company, the different data sources and a very different UX from B2C eCommerce. He was there on each step from the beginning with good communication, teamwork and, above all, meet the committed dates, always prioritizing having the site online. I emphasize that since its first delivery, it surprised us all with its creativity when solving UX issues concerns what was expected.",
    position: "CTO",
  },
  {
    author: "Darío Mira",
    company: "Gurudevelopers",
    message:
      "Pure admiration for Harald both professionally and personally. He was one of the most brilliant people I worked with. It was a blessing to be able to work with him in his early days and see the growth he has developed in such a short time.",
    position: "Co-founder",
  },
];

const Brands = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
`;
const BackgroundImageContainer = styled.div`
  position: relative;
`;
const BackgroundImageWrapper = styled.div`
  max-width: 50%;
  position: fixed;
  right: 0;
  top: 48px;
  ${media("medium")`
    max-width: unset;
  `}
`;
const Main = styled(DefaultMain)`
  > * {
    position: relative;
  }
  > h1,
  > h2 {
    text-align: center;
    text-shadow: 1px 1px 3px ${({ theme }) => theme.colors.background};
  }
  > h1 {
    margin-top: 76px;
  }
  > h2:first-of-type {
    font-size: 1rem;
    font-weight: normal;
  }
  ${media("medium")`
    > h1,
    > h2:first-of-type {
      text-align: left;
    }
    > h1 {
      margin-top: unset;
    }
    > h2:first-of-type {
      font-size: 1.6rem;
      font-weight: bold;
    }
  `}
`;
const Message = styled(Text)<{ expanded: boolean }>`
  font-style: italic;
  height: ${({ expanded }) => (expanded ? "auto" : "10.3rem")};
  overflow: hidden;
  position: relative;
  text-align: justify;
  white-space: pre-line;
  ::before,
  ::after {
    background-color: ${({ theme }) => theme.colors.background};
    left: 0;
    position: absolute;
    width: 100%;
  }
  ::before {
    bottom: 1.3rem;
    content: ${({ expanded }) => (expanded ? "unset" : '"[...]”"')};
  }
  ::after {
    bottom: 0;
    content: ${({ expanded }) => (expanded ? "unset" : '"Read more"')};
    font-style: normal;
    height: 1.3rem;
    text-decoration: underline;
  }
  ${media("medium")`
    font-size: 1.1rem;
    height: unset;
    line-height: 1.8;
    overflow: unset;
    ::before,
    ::after {
      content: unset;
    }
  `}
`;
const Recommendation = styled.div`
  margin: auto;
  max-width: 800px;
`;
const Signature = styled(Text)`
  text-align: end;
`;

export default function Experience(): JSX.Element {
  const [expandedMessageIndex, setExpandedMessageIndex] = React.useState(
    null as null | number
  );

  return (
    <Layout title="Experience">
      <Main>
        <BackgroundImageContainer>
          <BackgroundImageWrapper>
            <Image
              src="/images/martin-pescador.webp"
              alt="Martin pescador illustration"
              height={300}
              width={421}
              priority
            />
          </BackgroundImageWrapper>
        </BackgroundImageContainer>
        <H1>Experience</H1>
        <H2>These are the companies and brands that I've worked with</H2>
        <Brands>
          {brandsAndCompanies.map(({ name, url }) => (
            <BrandItem key={url} brand={name} url={url} />
          ))}
        </Brands>
        <H2>And comments from clients and co-workers</H2>
        <RecommendationsSlider onSlide={() => setExpandedMessageIndex(null)}>
          {recommendationsData.map(
            ({ author, company, message, position }, index) => (
              <RecommendationItem key={index}>
                <Recommendation>
                  <Message
                    expanded={index === expandedMessageIndex}
                    onClick={() => setExpandedMessageIndex(index)}
                  >
                    “{message}”
                  </Message>
                  <Signature>
                    <strong>{author}</strong>.<br />
                    {position}, {company}.
                  </Signature>
                </Recommendation>
              </RecommendationItem>
            )
          )}
        </RecommendationsSlider>
      </Main>
    </Layout>
  );
}
