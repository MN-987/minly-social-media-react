import { Toaster } from "react-hot-toast"
import "./App.css"
import PostList from "./features/Posts/PostList"
import Navbar from './ui/NavBar/NavBar'
import UploadButton from "./ui/UploadButton/UploadButton"
 
function App() {
  return (
    <>
    <Toaster position="top-right"/>
    <span className="fixed top-0 w-full z-50 mb-20" >
    <Navbar/>  
    </span>
    <PostList/>
      <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 border-2 border-gray-500 rounded-lg p-2 bg-white hover:bg-gray-100 transition duration-300 ease-in-out">
  <UploadButton />
</div>

    </>
  )
}

export default App
