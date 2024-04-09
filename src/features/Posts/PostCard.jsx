import { useState } from 'react';
import { FiUser } from 'react-icons/fi'; // Assuming you're using react-icons for icons

const PostCard = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="flex-auto w-full">
        <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div className="p-5 flex flex-col items-center justify-center">
            <a href="#" className="flex items-center mb-2">
              <div className="h-12 w-12 mr-2 bg-white rounded-full flex items-center justify-center">
                <FiUser className="h-6 w-6 text-gray-700" /> {/* Profile icon */}
              </div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mostafa Nasser
              </h5>
            </a>
            <a href="#" className="mb-4">
              <img
                className="mx-auto h-auto w-65 rounded-t-lg"
                src="./me.jpg"
                alt=""
              />
            </a>
            <div className="flex items-center justify-center">
              <button
                onClick={handleLikeClick}
                className={`inline-flex items-center rounded-lg ${
                  liked ? 'bg-blue-700' : 'bg-white-200'
                } px-3 py-2 text-center text-sm font-medium text-${
                  liked ? 'white' : 'gray-900'
                } hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
              >
                Like
                <span className="ml-2" aria-hidden="true">
                  {/* Like icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`h-6 w-6 ${liked ? 'text-white' : 'text-gray-900'}`}
                  >
                    {/* SVG path for like icon */}
                  </svg>
                </span>
              </button>
              <h6 className="ml-2 text-white">31</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
