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
const recommendationsData = Array(7).fill({
  author: "John Doe",
  company: "Company",
  message:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nisi natus quisquam soluta deleniti quo eligendi quam? Assumenda amet modi eos nobis iusto quibusdam culpa numquam. Rem architecto inventore alias!",
  position: "CEO",
});

const Brands = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Comments = styled(H2)`
  text-align: center;
`;
const BackgroundImageContainer = styled.div`
  position: relative;
`;
const BackgroundImageWrapper = styled.div`
  max-width: 100px;
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
`;
const Message = styled(Text)`
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
`;
const Recommendation = styled.div`
  margin: auto;
  max-width: 800px;
`;
const Signature = styled(Text)`
  text-align: end;
`;

export default function Experience(): JSX.Element {
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
        <Comments>And comments from clients and co-workers</Comments>
        <RecommendationsSlider>
          {recommendationsData.map(
            ({ author, company, message, position }, index) => (
              <RecommendationItem key={index}>
                <Recommendation>
                  <Message>“{message}”</Message>
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
