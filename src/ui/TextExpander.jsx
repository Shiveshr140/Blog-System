import { useState } from "react";

export default function TextExpander({
  collapsedNumWords = 15,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
  className = "",
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  const handleClick = () => {
    setIsExpanded((exp) => !exp);
  };

  return (
    <div
      className={className}
      style={{ maxWidth: "100%", overflow: "hidden", textOverflow: "ellipsis" }}
    >
      <span>{displayText}</span>
      <button onClick={handleClick} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
