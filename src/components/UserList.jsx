import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserList.css";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [ageFilter, setAgeFilter] = useState(18);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `http://localhost:3000/users/?min-age=${ageFilter}`
      );
      setUsers(response.data);
      console.log(response.data);
      // axios
    };
    loadData();
  }, [ageFilter]);

  const deleteUser = async (id) => {
    try {
      console.log("Trying to delete user with id:", id);
      const result = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      <h2>Filter</h2>
      <label htmlFor="filterAge">Age:</label>
      <input
        type="range"
        id="filterAge"
        min="0"
        max="100"
        value={ageFilter}
        onChange={(e) => {
          setAgeFilter(e.target.value);
        }}
      />{" "}
      {ageFilter}
      <section className="list__container">
        {users.map((user, index) => (
          <p className="list__row" key={index}>
            {/* <p>Rohdaten: {JSON.stringify(user).replace(",", ", ")}</p> */}
            <span>
              {user.firstName} {user.lastName} ({user.age})
            </span>
            <span>
              <button
                className="button__edit"
                onClick={() => {
                  navigate("/users/edit/" + user._id);
                }}
              >
                EDIT
              </button>
              <button
                className="button__delete"
                onClick={() => {
                  deleteUser(user._id);
                }}
              >
                DELETE
              </button>
            </span>
          </p>
        ))}
      </section>
    </main>
  );
}
