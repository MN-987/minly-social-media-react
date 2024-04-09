import "./App.css"
import PostCard from "./features/Posts/PostCard"
import Navbar from './ui/NavBar/NavBar'
import UploadButton from "./ui/UploadButton/UploadButton"

function App() {
  return (
    <>
    <span className="fixed top-0 w-full z-50 mb-20" >
    <Navbar/>  
    </span>
      <div className="flex  bg--400 flex-col items-center mt-16 ">   
        <div className="flex-grow w-85 mt-10">
          <PostCard/>
        </div>
        <div className="flex-grow w-85 mt-10">
          <PostCard/>
        </div>
        <div className="flex-grow w-85 mt-10 ">
          <PostCard/>
        </div>
      </div>
      <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 border-2 border-gray-500 rounded-lg p-2 bg-white hover:bg-gray-100 transition duration-300 ease-in-out">
  <UploadButton />
</div>

    </>
  )
}

export default App
