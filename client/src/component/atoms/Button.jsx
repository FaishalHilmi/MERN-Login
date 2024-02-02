import React from "react";

function Button({ color, text, handle }) {
  return (
    <button
      className={`py-2 px-4 ${color} text-white rounded-md`}
      onClick={handle}
    >
      {text}
    </button>
  );
}

export default Button;
