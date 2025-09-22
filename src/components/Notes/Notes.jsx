import { useContext, useState } from "react";
import { listImg, gridImg } from "../../assets/images";
import './notes.css'
import NotesItem from "./NotesItem";
import { NotesContext } from "../../context/NotesContext";

const Notes = () => {
    const {notes, search, words, lang} = useContext(NotesContext);
    const [list, setList] = useState(true);
    const newNotes = notes.filter((elem)=>{
        let result = elem.title.concat(elem.desc).toLowerCase().includes(search.toLowerCase())
        return result
    })
  return (
    <div className='container notes'>
        <div className="notes__top">
            <h2 className="notes__title">{newNotes.length > 0 ? words.infobar[lang] : words.noinfobar[lang]}</h2>
            <button onClick={ ()=>{ setList(!list)} } className="notes__btn">
                <img src={ list ? listImg : gridImg } alt="" />
                <span>{list ? words.list[lang] : words.grid[lang]}</span>
            </button>
        </div>
        <div className={`notes__list ${!list && 'active'}`}>
            {newNotes.map((elem)=>(
                <NotesItem key={elem.id} note={elem} list={list}/>
            ))}
        </div>
    </div>
  )
}

export default Notes