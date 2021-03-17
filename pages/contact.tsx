import Layout from "../components/layout";

export default function Contact(): JSX.Element {
  return (
    <Layout title="Contact">
      <h1>Contact me!</h1>
      <p>
        Want to get in touch? You can email me at{" "}
        <a href="mailto:dev@harisolaas.com">dev@harisolaas.com</a> or leave your
        message bellow.
      </p>
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
    </Layout>
  );
}
