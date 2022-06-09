import { Container, BlockItem, Title, SeccondTitle } from "./Styled";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";
import { CgChevronLeft } from "react-icons/cg";
import { API } from "../api/api";
const Read = ({ data, setData }) => {
  const getData = () => {
    axios
      .get(`https://62989076de3d7eea3c6ab55d.mockapi.io/todoAPI/v1/inbox`)
      .then((getData) => {
        setData(getData.data);
        API();
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const updateData = (data) => {
    let { id, firstName, lastName, email } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Email", email);
  };
  const deleteData = (id) => {
    console.log(id);
    axios
      .delete(
        `https://62989076de3d7eea3c6ab55d.mockapi.io/todoAPI/v1/inbox/${id}`
      )
      .then(() => {
        getData();
      });
  };
  return (
    <Container>
      <Link to={"/"}>
        <CgChevronLeft size="2em" />
      </Link>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data?.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.firstName}</Table.Cell>
              <Table.Cell>{item.lastName}</Table.Cell>
              <Table.Cell>{item.email}</Table.Cell>
              <Table.Cell>
                <Link to={"/update"}>
                  <Button onClick={() => updateData(item)}>Update</Button>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Button onClick={() => deleteData(item.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default Read;
