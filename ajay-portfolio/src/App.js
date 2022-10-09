import GlobalStyle from "./globalStyles"
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage/Homepage"

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Homepage />
    </>
  )
}
//To do - Do use children props here
export default App
