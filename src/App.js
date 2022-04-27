import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// - state variable -> user
// beim laden der seite (useEffect) -> api anfrage (axios.get) -> url: (backend)
// backend starten: port
// react: 4000 / express: 3000

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
      console.log(response.data);
      // axios
    };
    loadData();
  }, []);

  return (
    <div className="App">
      <h1>Zusammenarbeit Git</h1>
      <div>{JSON.stringify(users)}</div>
    </div>
  );
}

export default App;
