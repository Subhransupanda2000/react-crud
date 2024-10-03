import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUsers = () => {
  const [user, setUser] = useState([{ id: "", name: "" }]);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://localhost:3000/user", user).then(() => navigate("/"));
  }
  function change(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <h1 className="text">Add Users</h1>
      <form>
        <label for="fname"> Name:</label>
        <input
          type="text"
          name="name"
          id="fname"
          value={user.name}
          onChange={change}
        />
        <br />
        <label for="fname">id: </label>
        <input
          type="text"
          name="id"
          id="fname2"
          value={user.id}
          onChange={change}
        />
        <br />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default AddUsers;
