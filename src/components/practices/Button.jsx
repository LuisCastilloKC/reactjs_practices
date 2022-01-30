import React from "react";

const ButtonGroup = ({ buttons }) => {
    return (
      <>
        {buttons.map((buttonLabel, i) => (
          <button key={i} name={buttonLabel}>
            {buttonLabel}
          </button>
        ))}
      </>
    );
  };
export default ButtonGroup;