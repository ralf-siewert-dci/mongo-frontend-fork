import React from "react";
import "./UserForm.css";

export default function UserForm() {
  return (
    <main>
      <h2>Add User</h2>
      <form className="userform">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" />

        <label htmlFor="lastName">First Name:</label>
        <input type="text" id="lastName" />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" />

        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </main>
  );
}
