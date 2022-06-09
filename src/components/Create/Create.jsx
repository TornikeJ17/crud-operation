import { Container } from "./Styled";
import { Button, Form, Input, Message } from "semantic-ui-react";

import { CgAddR, CgClose } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const postData = (e) => {
    e.preventDefault();

    if (firstName === "" && lastName === "" && email === "") {
      setTimeout(() => {
        return alert("Please fill in all the fields");
      }, 2000);
    } else {
      axios
        .post(` https://62989076de3d7eea3c6ab55d.mockapi.io/todoAPI/v1/inbox`, {
          firstName,
          lastName,
          email,
        })
        .then(() => {
          navigate("/read");
        });
    }
  };
  return (
    <Container>
      <Form className="form-class" onSubmit={postData}>
        <Form.Field>
          <label className="control-label">First Name</label>
          <Input
            className="inputClass"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className="control-label">Last Name</label>
          <Input
            className="inputClass"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className="control-label">Email</label>
          <Input
            className="inputClass"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default Create;
