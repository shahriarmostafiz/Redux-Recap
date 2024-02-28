import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const Posts = () => {
    const { posts, isLoading, isError, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if (isLoading) {
        return <h1>Loading posts..  </h1>
    }
    if (isError) {
        return <h1>{error}</h1>
    }
    if (posts.length <= 0) {
        return <h1> No posts found...  </h1>
    }
    return (
        <div>
            <ul>
                {
                    posts?.map((post, idx) => <li key={post.id} className='text-xl  py-1'>
                        <h1 className='font-medium pb-1'>
                            {idx + 1}  {post.title}
                        </h1>
                        <p>💭 {post?.body}</p>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Posts;