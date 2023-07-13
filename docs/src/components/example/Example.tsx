// React Imports
import React from "react";

// Type
type ButtonProps = {
  text?: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <div>
      <button>{text || "Button"}</button>
    </div>
  );
};

export default Button;
