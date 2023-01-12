import { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface props {
    showModal: boolean,
    children: any
    setShowModal: (val: boolean) => void;
  }

const Modal = ({showModal, setShowModal, children}: props) => {
    const modalRef = useRef(null)
    const clickOutsidehandler = () => { setShowModal(!showModal) };
    useOnClickOutside(modalRef, clickOutsidehandler);

    return (
       showModal ? ( 
       <div className='fixed w-full h-full left-0 top-0 flex items-center justify-center z-50 bg-modalBackgroundLayer'>
            <div
                ref={modalRef}
                className='max-w-[480px] w-full bg-white rounded-md text-black p-8' >
                {children}
            </div>
        </div>
       ) : null
    )
}

export default Modal;

