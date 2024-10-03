import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const UpdateUser = () => {
  let [values, setValues] = useState({ name: "", id: "" });
  let navigate = useNavigate();
  function change(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function update(e) {
    e.preventDefault();
    axios.put("http://localhost:3000/user/" + id, values).then(() => {
      navigate("/");
    });
  }
  let { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/" + id)
      .then((res) => setValues(res.data));
  }, []);

  return (
    <div>
      <h1 className="text">Edit your Profile</h1>
      <form action="">
        <input
          type="text"
          placeholder="enter username"
          name="name"
          id="input1"
          onChange={change}
          value={values.name}
        />
        <br />
        <input
          type="text"
          placeholder="enter id"
          name="id"
          id="input2"
          onChange={change}
          value={values.id}
        />
        <br />
        <button onClick={update}>UpdateUsers</button>
      </form>
    </div>
  );
};

export default UpdateUser;
