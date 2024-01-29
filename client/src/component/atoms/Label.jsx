import React from "react";

function Label({ htmlfor, text }) {
  return (
    <label htmlFor={htmlfor} className="mb-2 block">
      {text}
    </label>
  );
}

export default Label;
