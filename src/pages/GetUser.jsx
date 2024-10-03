import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetUser = () => {
  const [user, setUser] = useState([]);
  const [thead, setThead] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3000/user").then((val) => {
      setUser(val.data);
      setThead(Object.keys(val.data[0]).slice(0, 2));
    });
  }, []);
  function clickHandle() {
    navigate("/add");
  }
  function HandleDelete(id) {
    axios.delete(`http://localhost:3000/user/${id}`);
    setUser((prevUsers) => prevUsers.filter((u) => u.id !== id));
  }
  function HandleUpdate(id) {
    navigate(`/update/${id}`);
  }

  return (
    <table border={"1"} id="tbl">
      <thead>
        <tr>
          {thead.map((val) => {
            return <td key={val}>{val}</td>;
          })}
          <td>operation</td>
        </tr>
      </thead>
      <tbody>
        {user.map((val, index) => {
          return (
            <tr key={index}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>
                <button
                  id="dlt"
                  onClick={() => {
                    HandleDelete(val.id);
                  }}
                >
                  Delete
                </button>
                <button
                  id="upd"
                  onClick={() => {
                    HandleUpdate(val.id);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td colSpan={3} onClick={clickHandle} style={{ cursor: "pointer" }}>
            <button id="new">Add new</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GetUser;
