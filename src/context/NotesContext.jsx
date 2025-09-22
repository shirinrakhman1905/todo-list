import { createContext, useEffect, useState } from "react"
import words from '../assets/lang'

export const NotesContext = createContext(null)

const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'React',
      date: '07.03.2022',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 2,
      title: 'Vue.js',
      date: '25.03.2022',
      desc: 'Lorem Vue.js dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      id: 3,
      title: 'Angular',
      date: '30.03.2022',
      desc: 'Lorem Angular dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
  ])
  const [modal, setModal] = useState(false);
  const [currentID, setCurrenID] = useState(0);
  const [noteInfo, setNoteInfo] = useState(null);
  const [search, setSearch] = useState('')
  const [lang, setLang] = useState('ru')

  const addNote = (note)=>{
    setNotes([...notes, note]);
    setCurrenID(note.id)
    setModal(false)
  }

  const delNote = (id)=>{
    const newNotes = notes.filter((elem)=>{return elem.id != id});
    setNotes(newNotes);
  }

  const getNote = (id)=>{
    const note = notes.find((elem)=>{ return elem.id == id});
    setNoteInfo(note);
    setModal(true)
  }

  const editNote = (note)=>{
    const newNotes = notes.map((elem)=>{
      if(elem.id == note.id){
        elem.date = note.date;
        elem.desc = note.desc;
        elem.title = note.title;
      }
      return elem;
    })
    setNotes(newNotes)
  }

  const closeModal = ()=>{
    setNoteInfo(null);
    setModal(false)
  }
  useEffect(()=>{
    let localNotes = localStorage.getItem('notes')
    localNotes = JSON.parse(localNotes)
    let localLang = localStorage.getItem('lang')
    if (localNotes) {
      setNotes(localNotes)
    }
    if (localLang) {
      setLang(localLang)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('notes', JSON.stringify(notes))
    const lastNoteIndex = notes.length - 1;
    const id = lastNoteIndex >= 0 ? notes[lastNoteIndex].id : 0;
    setCurrenID(id);
  }, [notes])

  useEffect(()=>{
    localStorage.setItem('lang', lang)
  }, [lang])
  
  return (
    <NotesContext.Provider 
      value={{notes, modal, setModal, currentID, addNote, delNote, getNote, noteInfo, editNote, closeModal, search, setSearch, words, lang, setLang}}
    >
        {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider