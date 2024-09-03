import { useState } from "react";
import html2canvas from "html2canvas";

interface Props {
  imageUrl: string | null;
}

const ImageSave: React.FC<Props> = ({ imageUrl }) => {
  const [fileName, setFileName] = useState<string>("");

  const handleSaveImage = () => {
    if (imageUrl) {
      const gridElement = document.querySelector(".image-grid") as HTMLElement;

      if (gridElement) {
        html2canvas(gridElement).then((canvas) => {
          const dataUrl = canvas.toDataURL("image/png");

          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = fileName || "scaled-image.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      }
    }
  };

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  return (
    <div style={{ margin: 10 }}>
      <input
        type="text"
        value={fileName}
        onChange={handleFileNameChange}
        placeholder="Enter file name"
      />
      <button
        onClick={handleSaveImage}
        disabled={!imageUrl || !fileName}
        style={{ borderWidth: 1 }}
      >
        Save Image
      </button>
    </div>
  );
};

export default ImageSave;
