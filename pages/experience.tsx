import H1 from "../components/styled-h1";
import H2 from "../components/styled-h2";
import Layout from "../components/layout";
import Main from "../components/styled-main";

export default function Experience(): JSX.Element {
  return (
    <Layout title="Experience">
      <Main>
        <H1>Experience</H1>
        <H2>This are the companies that I've worked with</H2>
        <H2>And some comments from clients and co-workers</H2>
      </Main>
    </Layout>
  );
}
