import { differenceInYears } from "date-fns";
import Layout from "../components/layout";

export default function Home(): JSX.Element {
  const yearsOfExperience = differenceInYears(new Date(), new Date(2016, 1, 1));
  return (
    <Layout>
      <main>
        <h1>Hi, I'm Hari Solaas! Pleased to meet you.</h1>
        <p>
          For the last {yearsOfExperience} years I've been building{" "}
          <strong>Wep Applications</strong> for clients around the world,
          startups and big companies. My experience ranges from working as a
          solo <strong>Freelance Profesional</strong> as well as a part of
          bigger teams.
        </p>
        <p>
          When working with me you can expect a fluid communication, attention
          to detail and super attractive results.
        </p>
      </main>
    </Layout>
  );
}
