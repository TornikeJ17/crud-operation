import { useState, useEffect } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setEmail(localStorage.getItem("Email"));
  }, []);
  const updateAPIData = () => {
    axios
      .put(
        `https://62989076de3d7eea3c6ab55d.mockapi.io/todoAPI/v1/inbox/${id}`,
        {
          firstName,
          lastName,
          email,
        }
      )
      .then(() => {
        navigate("/read");
      });
  };
  console.log(id);
  return (
    <Form className="form-class" onSubmit={updateAPIData}>
      <Form.Field>
        <label className="control-label">First Name</label>
        <Input
          className="inputClass"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label className="control-label">Last Name</label>
        <Input
          className="inputClass"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label className="control-label">Email</label>
        <Input
          className="inputClass"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Field>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Update;
