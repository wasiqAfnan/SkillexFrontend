import React from "react";
import { useState, useRef } from "react";
import { Camera, Upload } from "lucide-react";

const AvatarUpload = ({ currentAvatar, onAvatarChange, size = "w-32 h-32" }) => {
  const [preview, setPreview] = useState(currentAvatar);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert("File size must be less than 5MB");
        return;
      }
      
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      setIsUploading(true);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
        setIsUploading(false);
        if (onAvatarChange) {
          onAvatarChange(file, e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <div className={`avatar ${size} mx-auto`}>
        <div className="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          {preview ? (
            <img 
              src={preview} 
              alt="Avatar preview" 
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full bg-base-200 rounded-full">
              <Upload className="h-8 w-8 text-base-content/50" />
            </div>
          )}
        </div>
      </div>
      
      <button
        type="button"
        onClick={triggerFileInput}
        disabled={isUploading}
        className="btn btn-circle btn-primary btn-sm absolute -bottom-2 -right-2 btn-gradient"
        aria-label="Upload avatar"
      >
        {isUploading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <Camera className="h-4 w-4" />
        )}
      </button>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
        aria-label="Avatar file input"
      />
    </div>
  );
};

export default AvatarUpload;