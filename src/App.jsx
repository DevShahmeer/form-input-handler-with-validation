import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <h2>Content Form</h2>
        <form action="">
          <div>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
