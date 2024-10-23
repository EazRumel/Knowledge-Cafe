import './App.css'
import Bookmarks from './component/Bookmarks/Bookrmarks'
import Blogs from './component/Header/Blogs/Blogs'
import Header from './component/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
  <div className='md:flex max-w-7xl mx-auto'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
  </div>
    </>
  )
}

export default App
