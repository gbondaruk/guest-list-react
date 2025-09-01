import './App.css';
import React, { useEffect, useState } from 'react';

export default function App() {
  //Base URL for API
  const baseUrl = 'http://localhost:4000';

  return (
    //Display guest list
    <div>
      <h1>My Guest List</h1>
      <label>
        First Name:
        <input></input>
      </label>

      <label>
        Last Name:
        <input></input>
      </label>
    </div>
  );
}
