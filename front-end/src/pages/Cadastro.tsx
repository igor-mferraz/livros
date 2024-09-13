import { useState } from 'react'

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex justify-start items-center p-4 w-full overflow-x-auto'>
        <table className='border w-full'>
          <thead>
            <tr className='flex font-normal'>
              <th className='border overflow-hidden min-w-48 flex-1 px-2 py-1'>Nome</th>
              <th className='border overflow-hidden min-w-48 flex-1 px-2 py-1'>Autor</th>
              <th className='border overflow-hidden min-w-48 flex-1 px-2 py-1'>Numero Edição</th>
              <th className='border overflow-hidden min-w-48 flex-1 px-2 py-1'>Codigo de Barras</th>
              <th className='border overflow-hidden min-w-48 flex-1 px-2 py-1'>Lançamento</th>
              <th className='border overflow-hidden min-w-48 flex-1 px-2 py-1'>Local</th>
              <th className='border overflow-hidden w-14 px-2 py-1'>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr className='flex'>
              <td className='border flex-1 overflow-hidden min-w-48 px-2 py-1 whitespace-nowrap'>Harry Potter e a Pedra Filosofal</td>
              <td className='border flex-1 overflow-hidden min-w-48 px-2 py-1 whitespace-nowrap'>Harry Potter</td>
              <td className='border flex-1 overflow-hidden min-w-48 px-2 py-1 whitespace-nowrap'>2</td>
              <td className='border flex-1 overflow-hidden min-w-48 px-2 py-1 whitespace-nowrap'>7894562</td>
              <td className='border flex-1 overflow-hidden min-w-48 px-2 py-1 whitespace-nowrap'>12/09/2024</td>
              <td className='border flex-1 overflow-hidden min-w-48 px-2 py-1 whitespace-nowrap'>Curitiba</td>
              <td className='border w-14 overflow-hidden px-2 py-1 whitespace-nowrap'>Editar</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Cadastro