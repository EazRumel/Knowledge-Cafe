import { useState } from 'react'
import './App.css'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Blogs from './component/Header/Blogs/Blogs'
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0)
  
  const handleAddToBookmarks = blog => {
  const newBookmarks = [...bookmarks,blog];
  setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (id,time) => {
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks)
  }

  return (
    <>
    <Header></Header>
  <div className='md:flex max-w-7xl mx-auto'>
    <Blogs
    handleAddToBookmarks ={handleAddToBookmarks}
    handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
  </div>
    </>
  )
} 

export default App
