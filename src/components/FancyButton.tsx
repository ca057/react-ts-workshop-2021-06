import React from "react";
import { expensivePublicKey } from "../utils";

interface FancyButtonProps {
  onClick: () => void;
  type?: "submit" | "button";
}

const FancyButton: React.FC<FancyButtonProps> = React.memo(
  ({ children, onClick, type = "button" }) => {
    expensivePublicKey();

    return (
      <button onClick={onClick} type={type}>
        {children}
      </button>
    );
  }
);

export default FancyButton;
