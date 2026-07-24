import Header from "./components/Header"
import Main from "./components/main"
import People from "./components/People"
import { content } from "./constants/copyright"

function App() {
  return (
    <>
    <Header/>
    <Main/>
    <div  className="arrow-link" >
      <a href={content.mainScreen.arrow.href}>
          <img src={content.mainScreen.arrow.image} alt="" />
      </a>
    </div>
    <People/> 
    </>
  )
}

export default App
