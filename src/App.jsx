import { useState } from 'react'
import './App.css'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Blogs from './component/Header/Blogs/Blogs'
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  
  const handleAddToBookmarks = blog => {
  const newBookmarks = [...bookmarks,blog];
  setBookmarks(newBookmarks)
  }
  return (
    <>
    <Header></Header>
  <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks}></Bookmarks>
  </div>
    </>
  )
}

export default App
