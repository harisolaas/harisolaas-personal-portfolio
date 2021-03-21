import { differenceInYears } from "date-fns";
import H1 from "../components/h1";
import Layout from "../components/layout";
import Text from "../components/text";

export default function Home(): JSX.Element {
  const yearsOfExperience = differenceInYears(new Date(), new Date(2016, 1, 1));
  return (
    <Layout>
      <H1>Hi, I'm Hari Solaas! Pleased to meet you.</H1>
      <Text>
        For the last {yearsOfExperience} years I've been building{" "}
        <strong>Wep Applications</strong> for clients around the world, startups
        and big companies. My experience ranges from working as a solo{" "}
        <strong>Freelance Profesional</strong> as well as a part of bigger
        teams.
      </Text>
      <Text>
        When working with me you can expect a fluid communication, attention to
        detail and super attractive results.
      </Text>
    </Layout>
  );
}
