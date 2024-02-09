import React from "react";

function Input({ type, name, handle, value }) {
  return type === "file" ? (
    <input
      type={type}
      className="w-full rounded-md px-2 py-1 border"
      id={name}
      name={name}
      onChange={handle}
      required
    />
  ) : (
    <input
      type={type}
      className="w-full rounded-md px-2 py-1 border"
      id={name}
      name={name}
      value={value}
      onChange={handle}
      required
    />
  );
}

export default Input;
