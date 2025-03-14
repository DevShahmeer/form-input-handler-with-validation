import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    let errorMessage = "";
    if (name === "phone") {
      if (!/^\d*$/.test(value)) {
        errorMessage = "Please enter only numbers";
      } else if (value.length > 0 && value.length < 10) {
        errorMessage = "Phone number must be at least 10 digits";
      }
    } else if (name === "email" && value.length > 0) {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "Please enter a valid email";
      }
    } else if (name === "username" && value.length > 0 && value.length < 3) {
      errorMessage = "Username must be at least 3 characters";
    }

    // Update error state with new error message
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submit", formData);

    // Check if any fields empty
    const hasEmptyFields = Object.values(formData).some(
      (value) => value === ""
    );
    if (hasEmptyFields) {
      alert("Please fill in all fields");
      return;
    }

    // Check if any field has error
    const hasError = Object.values(error).some((errorMsg) => errorMsg !== "");
    if (hasError) {
      alert("Please fix all errors before submitting");
      return;
    }

    // Form is valid, proceed with submission
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {error.username && <p className="error-text">{error.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error.email && <p className="error-text">{error.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number: </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone} // Changed from number to phone
            onChange={handleChange}
          />
          {error.phone && <p className="error-text">{error.phone}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
