import { differenceInYears } from "date-fns";
import Image from "next/image";
import styled from "styled-components";
import H1 from "../components/styled-h1";
import Layout from "../components/layout";
import Main from "../components/styled-main";
import Text from "../components/styled-text";

const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin: 56px auto 0;
  max-width: 680px;
  padding: 10px 25px;
`;
const ContentHeader = styled.div`
  display: grid;
  grid-template-columns: 160px auto;
`;
const ImageContainer = styled.div`
  padding: 20px;
`;
const StyledImage = styled(Image)`
  border-radius: 50%;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function Home(): JSX.Element {
  const yearsOfExperience = differenceInYears(new Date(), new Date(2016, 1, 1));
  return (
    <Layout>
      <Main>
        <Content>
          <ContentHeader>
            <ImageContainer>
              <StyledImage
                src="/images/profile.jpg"
                alt="Personal picture"
                height={120}
                width={120}
                priority
              />
            </ImageContainer>
            <TitleContainer>
              <H1>Hi, I'm Hari Solaas! Pleased to meet you.</H1>
            </TitleContainer>
          </ContentHeader>
          <Text>
            For the last {yearsOfExperience} years I've been building{" "}
            <strong>Wep Applications</strong> for clients around the world,
            startups and big companies. My experience ranges from working as a
            solo <strong>Freelance Profesional</strong> as well as a part of
            bigger teams.
          </Text>
          <Text>
            When working with me you can expect a fluid communication, attention
            to detail and super attractive results.
          </Text>
        </Content>
      </Main>
    </Layout>
  );
}
