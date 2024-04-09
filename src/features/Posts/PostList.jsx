import { useState, useEffect } from 'react';
import { getAllPosts } from '../../services/posts/posts.service';
import PostCard from './PostCard';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allMediaCount, setAllMediaCount] = useState(0);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [totalNumberOfPages,setTotalNumberOfPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getAllPosts(page, 2);
        if (!response) {
          throw new Error('Failed to fetch data');
        }
        const data = response.data.data.mediaObj;
        setPosts(prevPosts => [...prevPosts, ...data]);
        setAllMediaCount(response.data.data.allMediaCount);
        setTotalNumberOfPages(response.data.data.totalNumberOfPages);
        console.log('All media count:', allMediaCount);
        console.log('All pages count:', totalNumberOfPages);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!reachedEnd) {
          if (page >= allMediaCount -1) {
            setReachedEnd(true);
          } else {
            setPage(prevPage => prevPage + 1);
          }
        }
      }
    };

    fetchData();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, allMediaCount, reachedEnd]);

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
