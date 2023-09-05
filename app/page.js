import Nav from "./_conponents/Nav"
import ProgressBar from "./_conponents/ProgressBar"
import Future from "./_conponents/Future"
export default function Home() {
  return (
    <>
      <ProgressBar/>
      <Nav/>
      <Future/>
      <div className="h-[200vh]"></div>
    </>    
  )
}
