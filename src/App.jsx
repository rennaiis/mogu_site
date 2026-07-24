import Cards from "./components/Cards"
import Cases from "./components/Cases"
import Feedback from "./components/Feedback";
import Header from "./components/Header"
import Main from "./components/main"
import People from "./components/People";
import Picture from "./components/Picture";
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
    <Cards/>
    <Picture {...content.separtorImage}/>
    <Cases/>
    <Feedback/>
    </>
  )
}

export default App
