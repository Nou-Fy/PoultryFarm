
/**
 * @param {string} label
 * @param {string} clickedLabel
 * @param {string} type
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} onClick
 * @returns
 */
import React, { useState } from "react";

export default function Button({
  label,
  clickedLabel,
  type = "button", // important
  onClick,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button type={type} onClick={handleClick}>
      {isClicked && clickedLabel ? clickedLabel : label}
    </button>
  );
}
