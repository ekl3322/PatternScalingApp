import { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import ImageUpload from "./components/ImageUpload";

function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const [rangeValue, setRangeValue] = useState<number>(30); // Default scale value

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
    <div>
      <center>
        <h1 style={{ textAlign: "center" }}>Scaling App</h1>
        <div>
          {selectedImage && imageWidth && imageHeight && (
            <ImageGrid
              imageUrl={selectedImage}
              imageHeight={imageHeight}
              imageWidth={imageWidth}
              scaleValue={rangeValue / 100} // Convert range value to a scale factor
            />
          )}
        </div>
        <div>
          <ImageUpload onImageChanged={handleImageChanged} />
        </div>

        <div>
          <input
            type="range"
            className="form-range"
            style={{ width: 500 }}
            min={10} // Minimum scale percentage (10%)
            max={100} // Maximum scale percentage (100%)
            value={rangeValue}
            onChange={handleRangeChanged}
          />
          <p>Scale: {rangeValue}%</p>
        </div>
      </center>
    </div>
  );
}

export default App;
