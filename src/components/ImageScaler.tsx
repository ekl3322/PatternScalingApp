import React from "react";

interface Props {
  rangeValue: number;
  handleRangeChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageScaler: React.FC<Props> = ({ rangeValue, handleRangeChanged }) => {
  return (
    <div>
      <input
        type="range"
        className="form-range"
        style={{ width: 500 }}
        min={5} // Minimum scale percentage
        max={100} // Maximum scale percentage
        value={rangeValue}
        onChange={handleRangeChanged}
      />
      <p>Scale: {rangeValue}%</p>
    </div>
  );
};

export default ImageScaler;
