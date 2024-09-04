import React from "react";

interface Props {
  widthDimension: string;
  heightDimention: string;
  onClick: () => void;
}

const ChangeDimensionsButton: React.FC<Props> = ({
  widthDimension,
  heightDimention,
  onClick,
}) => {
  return (
    <div>
      <button style={{ margin: 5, borderWidth: 1 }} onClick={onClick}>
        {widthDimension}:{heightDimention}
      </button>
    </div>
  );
};

export default ChangeDimensionsButton;
