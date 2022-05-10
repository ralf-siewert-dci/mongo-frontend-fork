import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./UserForm.css";

const apiHost = process.env.REACT_APP_API_HOST;

export default function UserForm({ editMode = false }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });
  const params = useParams();

  useEffect(() => {
    if (editMode) {
      const loadData = async () => {
        // console.log(params.id);
        const response = await axios.get(`${apiHost}/users/${params.id}`);
        setUserData(response.data);
        // console.log(response.data);
      };
      loadData();
    }
  }, [editMode, params.id]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const addUser = async (e) => {
    e.preventDefault();
    try {
      console.log("Trying to add user...", userData);
      const result = await axios.post(`${apiHost}/users`, userData);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  const editUser = async (e) => {
    e.preventDefault();
    try {
      console.log("Trying to add user...", userData);
      const result = await axios.patch(
        `${apiHost}/users/${params.id}`,
        userData
      );
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      {editMode ? <h2>Edit User</h2> : <h2>Add User</h2>}
      <form className="userform">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          onChange={handleChange}
          value={userData.firstName}
        />

        <label htmlFor="lastName">First Name:</label>
        <input
          type="text"
          id="lastName"
          onChange={handleChange}
          value={userData.lastName}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          onChange={handleChange}
          value={userData.age}
        />
        {editMode ? (
          <button className="button__edit" onClick={editUser}>
            Edit User
          </button>
        ) : (
          <button className="button__add" onClick={addUser}>
            Add User
          </button>
        )}
      </form>
    </main>
  );
}
