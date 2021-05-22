import { differenceInYears } from "date-fns";
import Image from "next/image";
import styled from "styled-components";
import H1 from "../components/styled-h1";
import Layout from "../components/layout";
import Main from "../components/styled-main";
import Text from "../components/styled-text";
import media from "../utils/media-queries";

const Avatar = styled(Image)`
  border-radius: 50%;
`;
const AvatarContainer = styled.div`
  padding-right: 20px;
`;
const BackgroundImages = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: -56px auto 0;
  max-width: 1280px;
  > div {
    z-index: 1;
  }
`;
const Presentation = styled.div`
  margin: 56px auto 0;
  max-width: 680px;
  position: relative;
  text-align: center;
  ${Text} {
    position: relative;
    z-index: 3;
  }
  ${media("medium")`
    padding: 25px;
    ::after {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      content: "";
      height: 100%;
      left: -1px;
      position: absolute;
      top: -1px;
      width: 100%;
      z-index: 1;
    }
  `}
`;
const PresentationHeader = styled.div`
  ${media("medium")`
    display: grid;
    grid-template-columns: 160px auto;
  `}
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Yaguarete = styled.div``;
const Tatu = styled.div``;

export default function Home(): JSX.Element {
  const yearsOfExperience = differenceInYears(new Date(), new Date(2016, 1, 1));

  return (
    <Layout>
      <Main>
        <Presentation>
          <PresentationHeader>
            <AvatarContainer>
              <Avatar
                src="/images/profile.jpeg"
                alt="Personal picture"
                height={120}
                width={120}
                priority
              />
            </AvatarContainer>
            <TitleContainer>
              <H1>Hi, I'm Hari Solaas! Pleased to meet you.</H1>
            </TitleContainer>
          </PresentationHeader>
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
        </Presentation>
        <BackgroundImages>
          <Yaguarete>
            <Image
              src="/images/yaguarete.webp"
              alt="Yaguarete illustration"
              height={475}
              width={604.46}
              priority
            />
          </Yaguarete>
          <Tatu>
            <Image
              src="/images/tatu-carreta.webp"
              alt="Tatu carreta illustration"
              height={194}
              width={400}
              priority
            />
          </Tatu>
        </BackgroundImages>
      </Main>
    </Layout>
  );
}
