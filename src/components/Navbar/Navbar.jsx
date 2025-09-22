import { useState, useContext } from 'react'
import {searchImg, backImg, closeImg} from '../../assets/images'
import './navbar.css'
import { NotesContext } from '../../context/NotesContext'

const Navbar = () => {
    const [hide, setHide] = useState(true);
    const { search, setSearch, words, lang, setLang } = useContext(NotesContext);

    const changeHide = ()=>{
        setHide(!hide)
        setSearch('')
    }
    const changeSearch = (event)=>{
        setSearch(event.target.value);
    }
  return (
    <header className='header'>
        <Transition className="header__content" hide={!hide}>
            {
                lang == 'uz' ? 
                <button className="header__lang" onClick={()=>{setLang('ru')}}>ru</button> :
                <button className="header__lang" onClick={()=>{setLang('uz')}}>uz</button>
            }
            <h1 className="header__title">{words.appbartitle[lang]}</h1>
            <button onClick={changeHide}>
                <img src={searchImg} alt="" />
            </button>
        </Transition>
        <Transition className="header__form" hide={hide}>
            <button onClick={changeHide}>
                <img src={backImg} alt="" />
            </button>
            <input value={search} onChange={changeSearch} type="text" className="header__input container" placeholder={words.appbarseacrch[lang]}/>
            <button onClick={()=>{setSearch('')}}><img src={closeImg} alt="" /></button>
        </Transition>
    </header>
  )
}

export default Navbar