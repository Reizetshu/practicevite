import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <div>
      <Link to='postlist'>nested postlist</Link>
    </div>
  );
};

export default Posts;
