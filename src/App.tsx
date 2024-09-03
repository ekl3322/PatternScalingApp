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
  const [rangeValue, setRangeValue] = useState<number>(100); // Default scale value

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

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "auto auto",
      }}
    >
      <div style={{ gridColumn: "1 / span 2", textAlign: "center" }}>
        <h2>Scaling App</h2>
        <p>
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
        }}
      >
        <div>
          {selectedImage && imageWidth && imageHeight ? (
            <ImageGrid
              imageUrl={selectedImage}
              imageHeight={imageHeight}
              imageWidth={imageWidth}
              scaleValue={rangeValue / 100} // Convert range value to a scale factor
            />
          ) : (
            <div
              style={{
                width: 500,
                height: 500,
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
        <ImageScaler
          rangeValue={rangeValue}
          handleRangeChanged={handleRangeChanged}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
          margin: 10,
        }}
      >
        <ImageUpload onImageChanged={handleImageChanged} />
        <ImageSave imageUrl={selectedImage} />
        {/* <ChangeDimensionsButton widthDimension="1" heightDimention="1" />
        <ChangeDimensionsButton widthDimension="3" heightDimention="2" /> */}
      </div>
    </div>
  );
}

export default App;
