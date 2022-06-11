import { Container, Table, Tbody, Thead, SeccondTitle } from "./Styled";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
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

      <div className="table-responsive tableBox">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data?.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={"/update"}>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => updateData(item)}
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteData(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Read;
