import { differenceInYears } from "date-fns";
import Head from "next/head";
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
  ${media("medium")`
    padding-right: 20px;
  `}
`;
const Grid = styled.div`
  text-align: center;
  ${media("medium")`
    display: grid;
    grid-template-columns: 1fr 340px 340px 1fr;
    text-align: unset;
  `}
`;
const PresentationHeader = styled.div`
  margin-top: 56px;
  ${media("medium")`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-bottom: none;
    display: grid;
    grid-column: 2 / 4;
    grid-template-columns: 160px auto;
    padding: 25px 25px 0;
  `}
`;
const PresentationText = styled.div`
  position: relative;
  ${Text} {
    position: relative;
    z-index: 2;
  }
  ${media("medium")`
    grid-column: 2 / 4;
    padding: 0 25px 25px;
    ::before {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      border-top: none;
      box-sizing: border-box;
      content: "";
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
    }
  `}
`;
const Tatu = styled.div`
  margin: auto;
  max-width: 150px;
  ${media("medium")`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    grid-column: 3 / 5;
    grid-row: 3;
    margin: unset;
    max-width: unset;
  `}
  ${media("large")`
    margin-right: calc(100% - 640px);
  `}
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Yaguarete = styled.div`
  ${media("medium")`
    height: 380px;
    grid-column: 1 / 3;
    grid-row: 3;
    position: relative;
    z-index: 1;
  `}
  ${media("large")`
    margin-left: calc(100% - 640px);
  `}
`;
const YaguareteWrapper = styled.div`
  ${media("medium")`
    bottom: 0;
    position: absolute;
    right: 0;
  `}
`;

export default function Home(): JSX.Element {
  const yearsOfExperience = differenceInYears(new Date(), new Date(2016, 1, 1));

  return (
    <>
      <Head>
        <meta property="og:title" content="Hari Solaas, frontend engineer." />
        <meta
          property="og:description"
          content="For the last 5 years I've been building Wep Applications for clients around the world, startups and big companies. My experience ranges from working as a solo Freelance Profesional as well as a part of bigger teams. When working with me you can expect a fluid communication, attention to detail and super attractive results."
        />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL} />
        <meta property="og:image" content="/images/yaguarete-OG.jpg" />
      </Head>
      <Layout>
        <Main>
          <Grid>
            <PresentationHeader>
              <AvatarContainer>
                <Avatar
                  src="/images/avatar.webp"
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
            <Yaguarete>
              <YaguareteWrapper>
                <Image
                  src="/images/yaguarete.webp"
                  alt="Yaguarete illustration"
                  height={475}
                  width={604.46}
                  priority
                />
              </YaguareteWrapper>
            </Yaguarete>
            <PresentationText>
              <Text>
                For the last {yearsOfExperience} years I've been building{" "}
                <strong>Wep Applications</strong> for clients around the world,
                startups and big companies. My experience ranges from working as
                a solo <strong>Freelance Profesional</strong> as well as a part
                of bigger teams.
              </Text>
              <Text>
                When working with me you can expect a fluid communication,
                attention to detail and super attractive results.
              </Text>
            </PresentationText>

            <Tatu>
              <Image
                src="/images/tatu-carreta.webp"
                alt="Tatu carreta illustration"
                height={170}
                width={350}
                priority
              />
            </Tatu>
          </Grid>
        </Main>
      </Layout>
    </>
  );
}
