/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { FiUser } from 'react-icons/fi'; // Assuming you're using react-icons for icons

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes.count);

  const handleLikeClick = async () => {
    try {
      
      const url = liked
        ? `${import.meta.env.VITE_REACT_APP_backend_URL}/api/v1/media/un-like`
        : `${import.meta.env.VITE_REACT_APP_backend_URL}/api/v1/media/like`;
      const response = await axios.post(url, {
        mediaId: post._id,
        userId: post.uploaderUserId._id,
      });
       
      setLikesCount(response.data.data.likes.count);
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking/unliking post:', error);
    }
  };

  return (
    <div className="w-full flex-auto">
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center p-5">
          <a href="#" className="mb-2 flex items-center">
            <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <FiUser className="h-6 w-6 text-gray-700" /> {/* Profile icon */}
            </div>

            {post.uploaderUserId && (
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.uploaderUserId.firstName} {post.uploaderUserId.lastName}
              </h5>
            )}
          </a>
          <a  className="mb-4">
            {post.mediaType === 'video' ? (
              <video controls>
                <source src={post.mediaUrl} type="video/mp4" />
              </video>
            ) : (
              <img
                className="w-65 mx-auto h-auto rounded-t-lg"
                src={post.mediaUrl}
                alt=""
              />
            )}
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
              {liked ? 'Unlike' : 'Like'}
            </button>
            <h6 className="ml-2 text-white">{likesCount}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
