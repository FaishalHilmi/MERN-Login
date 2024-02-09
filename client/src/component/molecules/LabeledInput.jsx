import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

function LabeledInput({ type, name, text, value, handle }) {
  return (
    <div className="input-item mb-3">
      <Label htmlfor={name} text={text} />
      <Input type={type} name={name} value={value} handle={handle} />
    </div>
  );
}

export default LabeledInput;
