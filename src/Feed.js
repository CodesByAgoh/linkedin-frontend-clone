import React, { useState } from 'react';
import './Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([])
    

    const sendPost = e => {
        e.preventDefault();
    }

  return (
  <div className='feed'>
    <div className='feed__inputContainer'>
        <div className='feed__input'>
            <CreateIcon />
            <form>
                <input type='text' />
                <button onClick={sendPost} type='submit'>send</button>
            </form>
        </div>
        <div className='feed__inputOptions'>
            <InputOption Icon={ImageIcon} title='photo' 
            color='#70b5f9' />
             <InputOption Icon={SubscriptionsIcon} title='Video' 
            color='#e7a33e' />
             <InputOption Icon={EventNoteIcon} title='Event' 
            color='#c0cbcd' />
             <InputOption Icon={CalendarViewDayIcon} title='Write Article' 
            color='#7fc15e' />
        </div>
    </div>
    {/* post */}
    {posts.map((post) => (
        <Post />
    ))}
    <Post 
    name='Agoh kelechi' 
    description='This is a test' 
    message='Wow this works' 
     />
      <Post 
    name='Ebuka franklin' 
    description='Always playing' 
    message='Always playing' 
     />
      <Post 
    name='Samuel Ogwo' 
    description='Always loves to eat.' 
    message='Always loves to eat.' 
     />
      <Post 
    name='Ifeanyi Samuel' 
    description='Always laughing' 
    message='Always laughing' 
     />
      <Post 
    name='Obinna' 
    description='Always drinking coffee' 
    message='Always drinking coffee' 
     />
  </div>
  );
}

export default Feed;
