import Nav from "./_conponents/Nav"
import ProgressBar from "./_conponents/ProgressBar"
import Future from "./_conponents/Future"
import DnD from "./_conponents/DnD"
import Pat from "./_conponents/Pat"
import News from "./_conponents/News"
import Contact from "./_conponents/Contact"
export default function Home() {
  return (
    <>
      <ProgressBar/>
      <Nav/>
      <Future/>
      <DnD/>
      <Pat/>
      <News/>
      <Contact/>
    </>    
  )
}
