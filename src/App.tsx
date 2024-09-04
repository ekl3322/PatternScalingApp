import { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import ImageUpload from "./components/ImageUpload";
import ImageScaler from "./components/ImageScaler";
import ImageSave from "./components/ImageSave";
import ChangeDimensionsButton from "./components/ChangeDimensionsButton";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const [rangeValue, setRangeValue] = useState<number>(100);
  const [canvasWidth, setCanvasWidth] = useState<number>(500);
  const [canvasHeight, setCanvasHeight] = useState<number>(500);

  const handleImageChanged = (imageUrl: string) => {
    const image = new Image();
    image.src = imageUrl;

    image.onload = () => {
      setImageWidth(image.width);
      setImageHeight(image.height);
    };

    setSelectedImage(imageUrl);
  };

  const handleRangeChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(event.target.value));
  };

  const handleDimensionsChanged = (widthRatio: number, heightRatio: number) => {
    let newWidth = 500;
    let newHeight = 500;

    if (widthRatio > heightRatio) {
      newWidth = 500;
      newHeight = (newWidth * heightRatio) / widthRatio;
    } else {
      newHeight = 500;
      newWidth = (newHeight * widthRatio) / heightRatio;
    }
    setCanvasWidth(newWidth);
    setCanvasHeight(newHeight);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "auto auto auto auto",
      }}
    >
      <div
        style={{
          gridColumn: "1 / span 2",
          gridRow: "1",
          textAlign: "center",
          backgroundColor: "#61a0ed",
          borderBottomColor: "lightgray",
          borderBottomWidth: 2,
          borderBottomStyle: "solid",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
        }}
      >
        <h2 style={{ color: "white" }}>Scaling App</h2>
        <p style={{ color: "white" }}>
          Upload an image and adjust the scale of the pattern using a slider
          bar.
          <br />
          The smaller the scale value, the more times the image will repeat over
          the grid.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          gridRow: "2/ span 2",
        }}
      >
        <div>
          {selectedImage && imageWidth && imageHeight ? (
            <ImageGrid
              imageUrl={selectedImage}
              imageHeight={imageHeight}
              imageWidth={imageWidth}
              scaleValue={rangeValue / 100}
              gridWidth={canvasWidth}
              gridHeight={canvasHeight}
            />
          ) : (
            <div
              style={{
                width: canvasWidth,
                height: canvasHeight,
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <p>No image selected</p>
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          gridRow: "4",
          gridColumn: "1",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          display: "flex",
        }}
      >
        <ImageScaler
          rangeValue={rangeValue}
          handleRangeChanged={handleRangeChanged}
        />
      </div>

      <div
        style={{
          flexDirection: "column",
          margin: 10,
          gridRow: "2 / span 2",
          gridColumn: "2",
          display: "grid",
          gridTemplateColumns: "auto",
          gridTemplateRows: "auto auto",
        }}
      >
        <div style={{ gridRow: "1" }}>
          <ImageUpload onImageChanged={handleImageChanged} />
          <ImageSave imageUrl={selectedImage} />
        </div>

        <div
          style={{
            margin: 10,
            gridRow: "2",
          }}
        >
          <p
            style={{
              margin: 0,
              fontWeight: "bold",
            }}
          >
            Aspect Ratio
          </p>

          <ChangeDimensionsButton
            widthDimension="3"
            heightDimention="2"
            onClick={() => handleDimensionsChanged(3, 2)}
          />

          <ChangeDimensionsButton
            widthDimension="2"
            heightDimention="3"
            onClick={() => handleDimensionsChanged(2, 3)}
          />

          <ChangeDimensionsButton
            widthDimension="5"
            heightDimention="4"
            onClick={() => handleDimensionsChanged(5, 4)}
          />

          <ChangeDimensionsButton
            widthDimension="4"
            heightDimention="5"
            onClick={() => handleDimensionsChanged(4, 5)}
          />

          <ChangeDimensionsButton
            widthDimension="1"
            heightDimention="1"
            onClick={() => handleDimensionsChanged(1, 1)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
