import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

function LabeledInput({ type, name, text, handle }) {
  return (
    <div className="input-item mb-2">
      <Label htmlfor={name} text={text} />
      <Input type={type} name={name} handle={handle} />
    </div>
  );
}

export default LabeledInput;
