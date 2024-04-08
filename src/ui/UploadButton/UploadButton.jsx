import   { useState } from 'react';

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can implement your upload logic here
      console.log('Uploading file:', selectedFile);
      // Reset selected file after upload
      setSelectedFile(null);
    } else {
      console.log('Please select a file before uploading.');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <label
        className="block text-sm font-medium text-gray-900 dark:text-white cursor-pointer"
        htmlFor="file_input"
      >
        <svg
          className="w-6 h-6 mx-auto mb-2 fill-current text-gray-600 dark:text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm text-black">Choose file</span>
      </label>
      <input
        className="hidden"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div className="flex flex-col items-center space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {selectedFile.name}
          </p>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      )}
      <p
        className="text-xs text-gray-600 dark:text-gray-400"
        id="file_input_help"
      >
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
    </div>
  );
};

export default UploadButton;
