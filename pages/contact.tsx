import Image from "next/image";
import styled from "styled-components";
import AnimatedClick from "../components/animated-click";
import Button from "../components/button";
import Firefly from "../components/contact-form-firefly";
import H1 from "../components/styled-h1";
import Layout from "../components/layout";
import Main from "../components/styled-main";
import Text from "../components/styled-text";
import { defaultText } from "../styles/mixins";
import { useState } from "react";

const ButtonContainer = styled.div`
  float: right;
`;
const Content = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;
const Email = styled.a`
  font-style: italic;
`;
const Form = styled.form`
  position: relative;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Input = styled.input`
  ${defaultText}
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  padding: 12px 8px 4px;
  transition: all 0.3s;
  width: 100%;
  :focus {
    border-color: ${({ theme }) => theme.colors.firefly};
    outline-style: solid;
  }
`;
const InputGroup = styled.div`
  margin-bottom: 20px;
`;
const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 0.8rem;
  margin-bottom: 4px;
  text-transform: uppercase;
`;
const Textarea = styled(Input.withComponent("textarea"))`
  resize: none;
`;

export enum FIELDS {
  Name = "Name",
  Email = "Email",
  Message = "Message",
}

const FieldCoordinates: { [key in FIELDS]: [number, number] } = {
  [FIELDS.Name]: [54, 6],
  [FIELDS.Email]: [54, 87],
  [FIELDS.Message]: [78, 168],
};

export default function Contact(): JSX.Element {
  const [activeField, setActiveField] = useState(FIELDS.Name);
  const handleFocus = (e) => {
    const {
      target: { id: name },
    } = e;
    setActiveField(name);
  };

  return (
    <Layout title="Contact">
      <Main>
        <Content>
          <div>
            <H1>Contact me!</H1>
            <Text>
              Want to get in touch? You can email me at{" "}
              <Email href="mailto:dev@harisolaas.com">
                <AnimatedClick>dev@harisolaas.com</AnimatedClick>
              </Email>{" "}
              or leave your message bellow.
            </Text>
            <Form id="contact-form" action="">
              <InputGroup>
                <Label htmlFor={FIELDS.Name}>Name *</Label>
                <Input
                  id={FIELDS.Name}
                  type="text"
                  required
                  onFocus={handleFocus}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor={FIELDS.Email}>Email *</Label>
                <Input
                  id={FIELDS.Email}
                  type="email"
                  required
                  onFocus={handleFocus}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor={FIELDS.Message}>Message *</Label>
                <Textarea
                  id={FIELDS.Message}
                  rows={5}
                  required
                  onFocus={handleFocus}
                />
              </InputGroup>
              <ButtonContainer>
                <Button form="contact-form" type="submit">
                  Send
                </Button>
              </ButtonContainer>
              <Firefly moveTo={FieldCoordinates[FIELDS[activeField]]} />
            </Form>
          </div>
          <ImageContainer>
            <Image height={600} width={499} src="/images/oso-hormiguero.webp" />
          </ImageContainer>
        </Content>
      </Main>
    </Layout>
  );
}
