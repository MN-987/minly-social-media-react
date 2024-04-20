/* eslint-disable react/prop-types */
import   { useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { PostContext } from '../../context/posts';

const UploadButton = ({ refreshPosts }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [unSupportedFileFlag, setUnSupportedFileFlag] = useState(false);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const updatePost=useContext(PostContext);
  console.log('updatePost:', updatePost);
  const handleUpload = async () => {
    console.log('Uploading file:', selectedFile);
    if (selectedFile) {
      try {

        const suportedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif' , 'image/gif' , 'video/mp4'];
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('uploaderUserId', '6611719d19649772047095be');
        console.log('Uploading file api validation test1:');
        console.log('Uploading file api validation test:', suportedFileTypes.includes(selectedFile.type));
        
        if (!suportedFileTypes.includes(selectedFile.type)) {
          console.log('Unsupported file type.');
          setUnSupportedFileFlag(true);
          return; // Stop further execution
        }
        
        
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_backend_URL}/api/v1/media`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        toast.success('File uploaded successfully.'  );
        
        console.log('Uploading file api :', import.meta.env.VITE_REACT_APP_backend_URL);
        console.log('Upload successful:', response.data);
        setSelectedFile(null);
        setUnSupportedFileFlag(false);
        refreshPosts();
      } catch (error) {
         toast.error('This is was a problem in uploading file!')
        console.error('Error uploading file:', error);
      }
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

      {unSupportedFileFlag&& (
        <p className='text-red-500 text-sm'>Unsupported file type. Please select PNG, JPEG, JPG, GIF, or MP4.</p>
      )}
     <p
  className="text-xs text-gray-600 dark:text-gray-400"
  id="file_input_help"
>
  Accepted file types: PNG, JPEG, JPG, GIF, MP4.
</p>

    </div>
  );
};

export default UploadButton;
