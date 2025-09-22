import { useEffect, useRef } from "react"

const Transition = ({children, className, hide, onClick}) => {
    const elem = useRef(null)
    useEffect(()=>{
      if (elem && hide) {
        elem.current.style.display = 'none';
      }
    }, [])
    useEffect(()=>{
        if (elem.current && hide) {
            elem.current.classList.add('hide')
        } 
        else if(elem.current) {
          setTimeout(() => {
            elem.current.classList.remove('hide')
          }, 50);
          elem.current.removeAttribute('style')
        }
    })
    // console.log(elem);
  return (
    <div ref={elem} className={className} onMouseDown={onClick}>{children}</div>
  )
}

export default Transition