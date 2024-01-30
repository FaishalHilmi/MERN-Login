import React from "react";

function Label({ htmlfor, text }) {
  return (
    <label htmlFor={htmlfor} className="mb-1 block">
      {text}
    </label>
  );
}

export default Label;
