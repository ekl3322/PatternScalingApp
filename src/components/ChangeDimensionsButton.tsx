import React from "react";

interface Props {
  widthDimension: string;
  heightDimention: string;
}

const ChangeDimensionsButton: React.FC<Props> = ({
  widthDimension,
  heightDimention,
}) => {
  return (
    <div>
      <button style={{ margin: 10, borderWidth: 1 }}>
        {widthDimension}:{heightDimention}
      </button>
    </div>
  );
};

export default ChangeDimensionsButton;
