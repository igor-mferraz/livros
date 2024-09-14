import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { Modal } from '../components/modal';
import { Button } from '../components/button';
import { FormLivro } from '../components/form-livro';
import { Livro } from '../types/livro';
import { getAllLivros } from '../api/livro';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idLivro,setIdLivro] = useState<number | null>()
  const [data, setData] = useState<Livro[]>([])
  const [actionType, setActionType] = useState<string>('')

  const fetch = async () => {
    try {
      const response = await getAllLivros();
      console.log(response)
      setData(response.data);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className='flex flex-wrap justify-center items-center gap-4 w-full pt-4 max-w-screen-xl'>
      <div className='flex justify-between items-center w-full px-4'>
        <h1 className='font-bold text-xl'>Livros</h1>
        <div>
          <Button
            text='Adicionar Livro'
            color='bg-bgBtnDefault'
            onClick={()=>{setModalIsOpen(true); setIdLivro(null); setActionType('create')}}
            type='button'
          />
        </div>
      </div>
      
      {
        data.length > 0 ?
        <Table
          data={data}
          setModalIsOpen={setModalIsOpen}
          setIdLivro={setIdLivro}
          setActionType={setActionType}
        />
        :
        <div>
          Adicione Um Livro ao Sistema
        </div>
      }

      <Modal
        setModalIsOpen={setModalIsOpen}
        isOpen={modalIsOpen}>
          <FormLivro
            toast={toast}
            actionType={actionType}
            onClose={()=>setModalIsOpen(false)}
            id={idLivro}
            refresh={fetch}
          />
      </Modal>
      <ToastContainer autoClose={2000}/>
    </div>
  )
}

export default Home
