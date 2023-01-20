import React, { useState } from "react";

export default function AppForm() {
  const [form, setFrom] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름 : </label>
      <input
        value={form.name}
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="email">이메일 : </label>
      <input
        value={form.email}
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
