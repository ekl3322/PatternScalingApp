import React from "react";

interface Props {
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
  scaleValue: number;
}

const ImageGrid: React.FC<Props> = ({
  imageUrl,
  imageHeight,
  imageWidth,
  scaleValue,
}) => {
  const gridSize = 500;

  const scaledImageWidth = imageWidth * scaleValue;
  const scaledImageHeight = imageHeight * scaleValue;

  const numColumns = Math.ceil(gridSize / scaledImageWidth);
  const numRows = Math.ceil(gridSize / scaledImageHeight);

  const cellWidth = scaledImageWidth;
  const cellHeight = scaledImageHeight;

  return (
    <div
      className="image-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${numRows}, ${cellHeight}px)`,
        width: gridSize,
        height: gridSize,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${scaledImageWidth}px ${scaledImageHeight}px`,
        backgroundRepeat: "repeat",
        overflow: "hidden",
      }}
    >
      {/* The grid cells themselves will be empty */}
      {Array.from({ length: numColumns * numRows }).map((_, index) => (
        <div
          key={index}
          style={{
            width: cellWidth,
            height: cellHeight,
            position: "relative",
          }}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
