import React from "react";

interface FunnyButtonProps {
  children?: React.ReactNode;
}

export default function FunnyButton({
  children = "I am a default text!",
}: FunnyButtonProps) {
  return (
    <button>
      <p>🤣</p>
      {children}
      <p>🤣</p>
    </button>
  );
}
