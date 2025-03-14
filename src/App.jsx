import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [error, SetError] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    let errorMessage = "";

    if (!/^\d*$/.test(value)) {
      errorMessage = "Please add only number";
    } else if (value.length > 0 && value.length <= 10) {
      errorMessage = "Phone number must be at least 10 digits";
    } else if (name === "email" && value.length > 0) {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "Please enter a valid email";
      }
    } else if (name === "username" && value.length > 0 && value.length < 10) {
      errorMessage = "Username must be at least 3 characters";
    }

    setFromData((prevData) => ({
      ...prevData,
      [name]: errorMessage,
    }));

    setFromData((prevError) => ({
      ...prevError,
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
