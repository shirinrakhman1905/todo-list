import { editImg, deleteImg } from "../../assets/images"
import './notes.css'
import { NotesContext } from "../../context/NotesContext"
import { useContext, useState } from "react"


const NotesItem = ({list, note}) => {
    const {delNote, getNote, words, lang} = useContext(NotesContext)
  return (
    <div className='card'>
        <div className={ !list ? "card__content" : ''}>
            <h3 className="card__title">{note.title}</h3>
            <p className="card__date">{note.date}</p>
        </div>
        <p className="card__desc">{note.desc}</p>
        <div className="card__controls">
            <button className="card__btn" onClick={()=>{getNote(note.id)}}>
                <img src={editImg} alt="" />
                {words.editbtn[lang]}
            </button>
            <button className="card__btn red" onClick={()=>{delNote(note.id)}}>
                <img src={deleteImg} alt="" />
                {words.deledit[lang]}
            </button>
        </div>
    </div>
  )
};

    
  

export default NotesItem