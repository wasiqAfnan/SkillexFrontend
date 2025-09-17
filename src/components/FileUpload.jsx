import React, { useState, useRef } from "react";
import { Upload, File, X, Check } from "lucide-react";

const FileUpload = ({ onFileSelect, acceptedTypes = "*", maxSize = 10, multiple = false }) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);
    const validFiles = [];

    fileArray.forEach(file => {
      // Check file size (maxSize in MB)
      if (file.size > maxSize * 1024 * 1024) {
        alert(`File "${file.name}" is too large. Maximum size is ${maxSize}MB.`);
        return;
      }
      
      validFiles.push({
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
      });
    });

    if (multiple) {
      setFiles(prev => [...prev, ...validFiles]);
    } else {
      setFiles(validFiles);
    }

    if (onFileSelect) {
      onFileSelect(multiple ? validFiles : validFiles[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    if (onFileSelect) {
      onFileSelect(multiple ? newFiles : null);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="w-full">
      {/* Drop Zone */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors duration-200 cursor-pointer
          ${dragActive 
            ? 'border-primary bg-primary/10' 
            : 'border-base-300 hover:border-primary hover:bg-base-200/50'
          }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <div className="text-center">
          <Upload className={`mx-auto h-12 w-12 ${dragActive ? 'text-primary' : 'text-base-content/50'}`} />
          <div className="mt-4">
            <p className="text-lg font-medium">
              {dragActive ? 'Drop files here' : 'Upload files'}
            </p>
            <p className="text-sm text-base-content/70 mt-2">
              Drag and drop files here, or click to select files
            </p>
            <p className="text-xs text-base-content/50 mt-1">
              Maximum file size: {maxSize}MB {multiple && '• Multiple files allowed'}
            </p>
          </div>
        </div>
        
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedTypes}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium">Uploaded Files:</h4>
          {files.map((fileItem, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-base-200 rounded-lg">
              <div className="flex items-center space-x-3">
                {fileItem.preview ? (
                  <img 
                    src={fileItem.preview} 
                    alt="Preview" 
                    className="w-10 h-10 object-cover rounded"
                  />
                ) : (
                  <File className="h-8 w-8 text-base-content/50" />
                )}
                <div>
                  <p className="text-sm font-medium">{fileItem.name}</p>
                  <p className="text-xs text-base-content/70">
                    {formatFileSize(fileItem.size)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-success" />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="btn btn-ghost btn-xs btn-circle"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;