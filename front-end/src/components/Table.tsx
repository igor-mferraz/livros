import { useState } from 'react'


type props = {
  setModalIsOpen: (isOpen: boolean)=>void;
}


function Table({setModalIsOpen}:props) {

  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center w-full'>

      <div className='flex justify-start items-center w-full sm:overflow-x-auto sm:bg-white/5 rounded-lg p-2'>
        <table className='w-full'>
          <thead className=''>
            <tr className='hidden sm:flex flex-col p-2 bg-white/5 rounded-xl sm:flex-row sm:bg-transparent sm:border-b sm:border-white/50 sm:rounded-none'>
              <td className=' flex-1 overflow-hidden  px-2 py-1 sm:whitespace-nowrap'>Nome</td>
              <td className=' flex-1 overflow-hidden  px-2 py-1 sm:whitespace-nowrap'>Autor</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>Edição</td>
              <td className=' flex-1 overflow-hidden  px-2 py-1 sm:whitespace-nowrap'>Codigo</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>Data</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>Local</td>
              <td className=' flex justify-center items-center sm:w-16 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>
                
              </td>
            </tr>
          </thead>

          <tbody className='flex flex-col gap-2 sm:gap-0'>

            <tr className='flex sm:justify-center sm:items-center flex-col p-2 bg-white/5 rounded-xl sm:flex-row sm:bg-transparent sm:border-b sm:border-white/50 sm:rounded-none'>
              <td className=' flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>Harry Potter e a Pedra Filosofal</td>
              <td className=' flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>Harry Potter</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>2</td>
              <td className=' flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>7894562</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>12/09/2024</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>Curitiba</td>
              <td className=' sm:w-16 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>
                <button onClick={()=> setModalIsOpen(true)} type='button' className='flex justify-center items-center p-2 sm:w-12 w-full bg-white/10 rounded-lg gap-2'>
                  <span className=''>&#x270E;</span>
                  <span className='sm:hidden text-white cursor-pointer'>Editar</span>
                </button>
              </td>
            </tr>
            <tr className='flex sm:justify-center sm:items-center flex-col p-2 bg-white/5 rounded-xl sm:flex-row sm:bg-transparent sm:border-b sm:border-white/50 sm:rounded-none'>
              <td className=' flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>Harry Potter e a Pedra Filosofal Pedra Filosofal Pedra Filosofal</td>
              <td className=' flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>Harry Potter Pedra Filosofal Pedra Filosofal</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>2342432423</td>
              <td className=' flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>7894562432423423423423</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>12/09/2024</td>
              <td className=' hidden sm:flex flex-1 overflow-hidden px-2 py-1 sm:whitespace-nowrap text-ellipsis'>CuritibaCuritibaCuritibaCuritiba</td>
              <td className=' sm:w-16 overflow-hidden px-2 py-1 sm:whitespace-nowrap'>
                <button type='button' className='flex justify-center items-center p-2 sm:w-12 w-full bg-white/10 rounded-lg gap-2'>
                  <span className=''>&#x270E;</span>
                  <span className='sm:hidden text-white cursor-pointer'>Editar</span>
                </button>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  )
}

export default Table