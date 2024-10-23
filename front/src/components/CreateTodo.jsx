import { useState } from "react";

export const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 20,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        style={{
          padding: 10,
          margin: 20,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button
        style={{
          padding: 10,
          marginLeft: 20,
        }}
        type="submit"
        onClick={async () => {
          await fetch('http://localhost:5000/create', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          })
            .then(async (res) => {
              const json = await res.json();
              alert("Todo created");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Create
      </button>
    </div>
  );
};
