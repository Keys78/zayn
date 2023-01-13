import { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface props {
    showModal: boolean,
    children: any
    setShowModal: (val: boolean) => void;
}

const Modal = ({ showModal, setShowModal, children }: props) => {
    const modalRef = useRef(null)
    const clickOutsidehandler = () => { setShowModal(!showModal) };
    useOnClickOutside(modalRef, clickOutsidehandler);

    return (
        showModal ? (
            <div
                ref={modalRef}
            >
                {children}
            </div>
        ) : null
    )
}

export default Modal;

