import H1 from "../components/h1";
import Layout from "../components/layout";
import Main from "../components/main";
import Text from "../components/text";

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact">
      <Main>
        <H1>Contact me!</H1>
        <Text>
          Want to get in touch? You can email me at{" "}
          <a href="mailto:dev@harisolaas.com">dev@harisolaas.com</a> or leave
          your message bellow.
        </Text>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input id="message" type="textarea" />
          </div>
        </form>
      </Main>
    </Layout>
  );
}
