import { useState } from "react";

interface Props {
  onImageChanged: (imageUrl: string) => void;
}

const ImageUpload = ({ onImageChanged }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onImageChanged(imageUrl); // Notify the parent component
    }
  };

  return (
    <div style={{ margin: 10 }}>
      <input type="file" accept="image/*" onChange={handleImageChanged} />
    </div>
  );
};

export default ImageUpload;
