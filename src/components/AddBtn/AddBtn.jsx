import { editImg } from '../../assets/images'
import './add-btn.css'
import { NotesContext } from '../../context/NotesContext'
import { useContext } from 'react'

const AddBtn = () => {
    const {setModal} = useContext(NotesContext)
  return (
    <button className='add-btn' onClick={()=>{setModal(true)}}>
        <img src={editImg} alt="" />
    </button>
  )
}

export default AddBtn