import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "../pages/Index";
import Show from "../pages/Show";
import CONFIG from "../config/index";
import SignupPage from "../pages/SignupPage"
import LoginPage from "../pages/LoginPage";

export default function Main() {
  const [people, setPeople] = useState(null);

  const URL = CONFIG.peopleAPI;

  const getPeople = async () => {
    const data = await fetch(URL).then((res) => res.json());
    setPeople(data);
  };

  const createPeople = async (person) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  const updatePeople = async (person, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });
    getPeople();
  };

  const deletePeople = async (id) => {
    await fetch(URL + id, { method: "DELETE" });
    getPeople();
  };

  useEffect(() => {
    getPeople();
  });

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Index people={people} createPeople={createPeople} />}
        />
        <Route
          path="/people/:id"
          element={
            <Show
              people={people}
              deletePeople={deletePeople}
              updatePeople={updatePeople}
            />
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
}
