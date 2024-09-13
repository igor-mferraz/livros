type props = {
    isOpen: boolean,
    setModalIsOpen: (isopen:boolean) => void
}


export const Modal = ({isOpen, setModalIsOpen}:props) => {
    return(
        <>
            { isOpen &&
                <div className="absolute flex justify-center items-center top-0 w-full p-2 h-screen bg-black/75">

                    <div className="flex flex-col justify-center items-center w-full sm:max-w-7xl bg-black rounded-md border border-white/20 p-2">
                        <div className="flex justify-end items-center w-full p-2">
                            <button onClick={()=>setModalIsOpen(false)}>X</button>
                        </div>

                        <div className="w-full p-2 flex-col">
                            <div className="">
                                <label className="text-sm" htmlFor="">Nome</label>
                                <input className="outline-none p-1 rounded-md w-full bg-gray-300 text-black" type="text" />
                            </div>

                            <div className="">
                                <label className="text-sm" htmlFor="">Local</label>
                                <select className="outline-none p-1 rounded-md w-full bg-gray-300 text-black" name="" id="">
                                    <option value="">Curitiba</option>
                                    <option value="">Curitiba</option>
                                    <option value="">Curitiba</option>
                                    <option value="">Curitiba</option>
                                </select>
                            </div>
                            <div className="">
                                <label className="text-sm" htmlFor="">Data Lançamento</label>
                                <input className="outline-none p-1 rounded-md w-full bg-gray-300 text-black" type="date" />
                            </div>
                            <div className="">
                                <label className="text-sm" htmlFor="">Nome</label>
                                <input className="outline-none p-1 rounded-md w-full bg-gray-300 text-black" type="text" />
                            </div>
                            

                        </div>


                    </div>
                </div>
            }
        </>
    )
}