import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/
const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return(
    <div className="sidebarContainer" style={{
      width:props.width 
    }} >
        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
          <div className="cardHeader">
            <span>HAKKIMDA</span>
          </div>
          <div className="profileImageContainer">
            <img src="https://scontent.ftzx1-1.fna.fbcdn.net/v/t1.0-9/p720x720/59942409_1353065128180115_5950760145901322240_o.jpg?_nc_cat=107&_nc_sid=8024bb&_nc_ohc=mjfx-4gZA80AX-OFMZ2&_nc_ht=scontent.ftzx1-1.fna&_nc_tp=6&oh=1d411306f90eb87f49f54b2d5e6c63bb&oe=5F50D062 " alt="" />
          </div>
          <div className="cardBody">
            <p className="PersonelBio">1996 yılının Mart ayında Trabzon’da dünyaya geldim. Atatürk Üniversitesi,
               Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Blog sitemde ilgimi çeken konuları
               araştırarak yazılar paylaşıyorum...:)</p>
          </div>
        </Card>

        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>  
          <div className="cardHeader">
            <span>SON YAYIN</span>
            <div className="profileImageContainer">
            <img src="https://www.tvmidtvest.dk/files/media/2020/12/20200315-123308-2_25mb.jpg " alt="" />
            <div className="recentPosts">
            {
              posts.map(post =>{
                return (
                <NavLink key={post.id} to={`/post/${post.slug}`}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn[9][2]}</span>
                  </div>
                </NavLink>
                );
              })
            }
          </div>
          </div>
          </div>
        </Card>

        <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
          <div className="cardHeader">
            <span>SON YAYINLAR</span>
          </div>
          <div className="recentPosts">
            {
              posts.map(post =>{
                return (
                <NavLink key={post.id} to={`/post/${post.slug}`}>
                  <div className="recentPost">
                    <h3>{post.blogTitle}</h3>
                    <span>{post.postedOn}</span>
                  </div>
                </NavLink>
                ); })} </div></Card> </div>
        
   )

 }

export default Sidebar;