import { useState } from 'react'
import Table from '../components/Table'
import { Modal } from '../components/modal';
import { Button } from '../components/button';
import { FormLivro } from '../components/form-livro';
import { Livro } from '../types/livro';


function Home() {
  const [count, setCount] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);


  const [idLivro,setIdLivro] = useState<number>()

  const [data, setData] = useState<Livro[]>([{
    id: 1,
    nome: 'Começe Errado mas Começe',
    autor: 'Claudio Zini',
    edicao: '1',
    codigoDeBarras: '7894515',
    dataLancamento: '2024-09-13',
    local:'Curitiba'
  }])

  return (
    <div className='flex flex-wrap justify-center items-center gap-4 w-full pt-4 max-w-screen-xl'>
      <div className='flex justify-between items-center w-full px-4'>
        <h1 className='font-bold text-xl'>Livros</h1>
        <div>
          <Button
            text='Adicionar Livro'
            color='bg-bgBtnDefault'
            onClick={()=>{setModalIsOpen(true)}}
            type='button'
          />
        </div>
      </div>
      
      <Table
        data={data}
        setModalIsOpen={setModalIsOpen}
        setIdLivro={setIdLivro}
      />

      <Modal
        setModalIsOpen={setModalIsOpen}
        isOpen={modalIsOpen}>
          <FormLivro
            id={idLivro}
          />
      </Modal>
    </div>
  )
}

export default Home
