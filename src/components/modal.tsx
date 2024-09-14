import { IoMdClose } from "react-icons/io";

type props = {
    isOpen: boolean,
    setModalIsOpen: (isopen: boolean) => void
    children: any
}


export const Modal = ({ isOpen, setModalIsOpen, children}: props) => {
    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <>
            {isOpen &&
                <div onClick={() => setModalIsOpen(false)} className="fixed h-full flex justify-center items-center top-0 w-full p-4 bg-black/75">

                    <div onClick={handleContentClick} className="flex flex-col justify-center items-center w-full sm:max-w-3xl bg-black rounded-2xl border border-BorderColor p-2">
                        <div className="flex justify-end items-center w-full p-2">
                            <button onClick={() => setModalIsOpen(false)}>
                                <IoMdClose className="font-bold text-2xl" />
                            </button>
                        </div>

                        {
                            children
                        }


                    </div>
                </div>
            }
        </>
    )
}