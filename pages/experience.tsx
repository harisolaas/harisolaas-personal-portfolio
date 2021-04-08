import styled from "styled-components";
import H1 from "../components/styled-h1";
import H2 from "../components/styled-h2";
import Layout from "../components/layout";
import Main from "../components/styled-main";
import RecommendationItem from "../components/RecommendationSliderItem";
import RecommendationsSlider from "../components/Slider";
import { defaultText } from "../styles/mixins";
import media from "../utils/mediaQueries";

const recommendationsData = Array(7).fill({
  author: "John Doe",
  company: "Litebox",
  message:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nisi natus quisquam soluta deleniti quo eligendi quam? Assumenda amet modi eos nobis iusto quibusdam culpa numquam. Rem architecto inventore alias!",
  position: "CEO",
});

const BrandPlaceholder = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  ${media("medium")`
    height: 100px;
    margin: 16px;
    width: 160px;
    transition: all 0.5s;
    :hover {
      transform: scale(1.2);
    }
  `}
`;
const Brands = styled.div`
  ${media("medium")`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `}
`;
const Text = styled.p`
  ${defaultText}
  margin: 0;
`;

export default function Experience(): JSX.Element {
  return (
    <Layout title="Experience">
      <Main>
        <H1>Experience</H1>
        <H2>This are the companies that I've worked with</H2>
        <Brands>{Array(20).fill(<BrandPlaceholder />)}</Brands>
        <H2>And comments from clients and co-workers</H2>
        <RecommendationsSlider>
          {recommendationsData.map(({ message }, index) => (
            <RecommendationItem key={index}>
              <Text>
                {message} {index}
              </Text>
            </RecommendationItem>
          ))}
        </RecommendationsSlider>
      </Main>
    </Layout>
  );
}
