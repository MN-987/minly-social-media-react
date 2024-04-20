import { useState, useEffect } from 'react';
import { getAllPosts } from '../../services/posts/posts.service';
import PostCard from './PostCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAllPosts();
        if (!response) {
          throw new Error('Failed to fetch data');
        }
        const data = response.data.data;
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div>
      <div className="flex bg--400 flex-col items-center mt-16">
        {posts.map(post => (
          <div key={post._id} className="flex-grow w-85 mt-10">
            <PostCard post={post} />
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PostList;
