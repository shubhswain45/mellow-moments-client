import { useState } from "react";
// import useShowToast from "./useShowToast";

const usePreviewImg = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  // const showToast = useShowToast();
  const maxFileSizeInBytes = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining to safely access the first file
    if (file && file.type.startsWith("image/")) {
      if (file.size > maxFileSizeInBytes) {
        // showToast("Error", "File size must be less than 2MB", "error");
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result as string); // Type assertion to string
      };

      reader.readAsDataURL(file);
    } else {
      // showToast("Error", "Please select an image file", "error");
      setSelectedFile(null);
    }
  };

  return { selectedFile, handleImageChange, setSelectedFile };
};

export default usePreviewImg;
