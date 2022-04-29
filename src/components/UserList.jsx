import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [ageFilter, setAgeFilter] = useState(18);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(
        `http://localhost:3000/users/?min-age=${ageFilter}`
      );
      setUsers(response.data);
      console.log(response.data);
      // axios
    };
    if (!sliding) {
      loadData();
    }
  }, [ageFilter, sliding]);

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
        onMouseDown={() => {
          setSliding(true);
        }}
        onMouseUp={() => {
          setSliding(false);
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
              <button>EDIT</button>
              <button>DELTE</button>
            </span>
          </p>
        ))}
      </section>
    </main>
  );
}
