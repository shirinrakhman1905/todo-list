import './modal.css'
import { NotesContext } from '../../context/NotesContext'
import { useContext, useEffect, useState } from 'react'
import Transition from '../Transition/Transition'

const Modal = () => {
    const { modal, setModal, currentID, addNote, noteInfo, editNote, closeModal, words, lang } = useContext(NotesContext);
    const [input, setInput] = useState('');
    const [textarea, setTextarea] = useState('')
    const createNote = () => {
        const title = input.trim();
        const desc = textarea.trim();
        if (title && desc) {
            const note = {
                id: currentID + 1,
                title,
                date: new Date().toLocaleDateString(),
                desc
            }
            addNote(note);

        }
    }
    const changeNote = ()=>{
        const title = input.trim();
        const desc = textarea.trim();
        if (title && desc) {
            const note = {
                id: noteInfo.id,
                title,
                date: new Date().toLocaleDateString(),
                desc
            }
            editNote(note)
            setModal(false)
        }
    }
    useEffect(() => {
        if (noteInfo) {
            setInput(noteInfo.title);
            setTextarea(noteInfo.desc)
        } else {
            setInput('');
            setTextarea('')
        }
    }, [modal])
    return (
        <Transition className='modal' hide={!modal} onClick={() => { setModal(false) }}>
            <div className="modal__form" onMouseDown={(event) => { event.stopPropagation() }}>
                <h3 className="modal__title">
                    { !noteInfo ? words.titlewindow[lang] : words.titlewindowedit[lang]}
                </h3>
                <div className="modal__content">
                    <label>
                        <span>Title</span>
                        <input
                            value={input}
                            type="text"
                            placeholder='Title'
                            onChange={(event) => { setInput(event.target.value); }}
                        />
                    </label>
                    <label>
                        <span>Content</span>
                        <textarea rows={2}
                            value={textarea}
                            placeholder='Content'
                            onChange={(event) => { setTextarea(event.target.value) }}
                        ></textarea>
                    </label>
                </div>
                <div className="modal__controls">
                    <button className='modal__btn red' onClick={closeModal}>{words.closebtn[lang]}</button>
                    { !noteInfo ? 
                    <button className='modal__btn' onClick={createNote}>{words.addbtn[lang]}</button> : 
                    <button className='modal__btn' onClick={changeNote}>{words.editwindowbtn[lang]}</button>
                    }
                    
                </div>
            </div>
        </Transition>
    )
}

export default Modal