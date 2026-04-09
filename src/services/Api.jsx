import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../pages/Cards";

const Api = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>API CALL</h1>

      {/* {users.map((user) => (
                <div key={user.id}>
                    <Cards 
                        brandName={user.username} 
                        name={user.name} 
                        email={user.email}
                    />
                </div>
            ))} */}

      <div className="cards-container">
        {users.map((user) => (
          <Cards
            key={user.id}
            brandName={user.username}
            name={user.name}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
};

export default Api;
