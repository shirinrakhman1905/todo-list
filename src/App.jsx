import Modal from "./components/Modal/Modal"
import Navbar from "./components/Navbar/Navbar"
import Notes from "./components/Notes/Notes"
import NotesProvider from "./context/NotesContext"
import AddBtn from "./components/AddBtn/AddBtn"
import Transition from "./components/Transition/Transition"


const App = () => {
  return (
    <NotesProvider>
      <Navbar/>
      <Notes/>
      <Modal/>
      <AddBtn/>
      <Transition/>
    </NotesProvider>
  )
}

export default App