import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <div>
        <h2>Content Form</h2>
        <form action="">
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone: </label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
