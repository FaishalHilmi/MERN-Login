import React from "react";

function Input({ type, name, handle }) {
  return (
    <input
      type={type}
      className="w-full rounded-md px-2 py-1 border"
      id={name}
      name={name}
      onChange={handle}
      required
    />
  );
}

export default Input;
