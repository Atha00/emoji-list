import { useState } from "react";

const Line = (props) => {
  const [onHover, setOnHover] = useState(false);
  return (
    <div
      className="line"
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      onClick={() => {
        navigator.clipboard.writeText(props.line.symbol);
      }}
    >
      <div>
        <p>{props.line.symbol}</p>
        <p>{props.line.title}</p>
      </div>
      {onHover && <p>Click to copy</p>}
    </div>
  );
};

export default Line;
