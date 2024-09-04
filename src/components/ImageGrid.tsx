import React from "react";

interface Props {
  imageUrl: string;
  imageHeight: number;
  imageWidth: number;
  scaleValue: number;
  gridWidth: number;
  gridHeight: number;
}

const ImageGrid: React.FC<Props> = ({
  imageUrl,
  imageHeight,
  imageWidth,
  scaleValue,
  gridWidth,
  gridHeight,
}) => {
  const scaledImageWidth = imageWidth * scaleValue;
  const scaledImageHeight = imageHeight * scaleValue;

  const numColumns = Math.ceil(gridWidth / scaledImageWidth);
  const numRows = Math.ceil(gridHeight / scaledImageHeight);

  const cellWidth = scaledImageWidth;
  const cellHeight = scaledImageHeight;

  return (
    <div
      className="image-grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, ${cellWidth}px)`,
        gridTemplateRows: `repeat(${numRows}, ${cellHeight}px)`,
        width: gridWidth,
        height: gridHeight,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${scaledImageWidth}px ${scaledImageHeight}px`,
        backgroundRepeat: "repeat",
        overflow: "hidden",
        margin: 10,
      }}
    >
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
