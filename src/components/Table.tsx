import { Livro } from '../types/livro';
import { tranformDateView } from '../util/tranformDate';


type props = {
  setModalIsOpen: (isOpen: boolean)=>void;
  setActionType: (type: string)=>void;
  setIdLivro: (id: number)=>void;
  data: Livro[]
}


function Table({setModalIsOpen,setIdLivro,setActionType, data}:props) {


  return (
    <div className='flex justify-center items-center w-full p-4 mobile:p-1'>

      <div className='flex justify-center rounded-xl items-center w-full p-2 mobile:p-0 bg-white/20 mobile:bg-transparent'>

        <table className=' w-full'>

          <thead className='mobile:hidden'>
            <tr className='border-b'>
              <th className='text-start px-2 py-1'>Livro</th>
              <th className='text-start px-2 py-1'>Autor</th>
              <th className='text-start px-2 py-1'>Edição</th>
              <th className='text-start px-2 py-1'>Codigo de Barras</th>
              <th className='text-start px-2 py-1'>Data Lançamento</th>
              <th className='text-start px-2 py-1'>Local de Lançamento</th>
              <th className='text-start px-2 py-1'></th>
            </tr>
          </thead>

          <tbody className='mobile:flex mobile:flex-col mobile:gap-4'>

            {
              data.map((item,index)=>{
                return(
                <tr key={index} className='mobile:flex mobile:flex-col mobile:bg-white/10 mobile:rounded-xl border-b mobile:border-none p-2'>
                  <td className='px-2 py-1 mobile:border-none'>{item.nomeLivro}</td>
                  <td className='px-2 py-1 mobile:border-none '>{item.autor}</td>
                  <td className='px-2 py-1 mobile:border-none '>{item.numeroEdicao}</td>
                  <td className='px-2 py-1 mobile:border-none '>{item.codigoBarras}</td>
                  <td className='px-2 py-1 mobile:border-none '>{tranformDateView(item.dataLancamento)}</td>
                  <td className='px-2 py-1 mobile:border-none '>{item.localLancamento}</td>
                  <td className='px-2 py-1 mobile:border-none'>
                    <button 
                      onClick={()=>{ setIdLivro(item.id as number); setModalIsOpen(true); setActionType('update')}} 
                      type='button' 
                      className='bg-slate-500 w-full p-2 rounded-lg flex justify-center items-center gap-2'
                      >

                      <span className=''>&#x270E;</span>
                      <span className='sm:hidden text-white cursor-pointer'>Editar</span>
                    </button>
                  </td>
                </tr>
                )
              })
            }

            

          </tbody>

        </table>
      </div>

    </div>
  )
}

export default Table