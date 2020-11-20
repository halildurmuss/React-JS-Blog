import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';

/**
* @author
* @function Post
**/

const Post = (props) => {

  console.log(props); 

  return(
     <div>
      <Layout>
        <BlogPost {...props}/>
      </Layout></div>
   )

 }

export default Post;