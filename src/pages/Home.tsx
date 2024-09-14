import { useEffect, useState } from 'react'
import Table from '../components/Table'
import { Modal } from '../components/modal';
import { Button } from '../components/button';
import { FormLivro } from '../components/form-livro';
import { Livro } from '../types/livro';
import { getAllLivros } from '../api/livro';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiWhiteBook } from "react-icons/gi";


function Home() {

  const [loading, setLoading] = useState(false)
  const [getLoading, setGetLoading] = useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idLivro, setIdLivro] = useState<number | null>()
  const [data, setData] = useState<Livro[]>([])

  const [page, setPage] = useState(1);
  const [limit,] = useState(10);
  const [totalLivros, setTotalLivros] = useState(0)


  const [actionType, setActionType] = useState<string>('')

  const totalPages = Math.ceil(totalLivros / limit);

  const fetch = async () => {
    try {
      setGetLoading(true)
      const response = await getAllLivros(page, limit);
      setData(response.data.data);
      setTotalLivros(response.data.total)
      setGetLoading(false)
    } catch (err) {
      setGetLoading(false)
      console.log(err)
    }
  };

  useEffect(() => {
    fetch();
  }, [page]);

  const handlePage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {loading &&
        <div className='fixed flex bg-black/50 w-full h-screen justify-center items-center z-50'>
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full border-transparent border-t-blue-500 animate-spin"></div>
        </div>
      }

      <div className='flex flex-wrap justify-center items-center gap-4 w-full p-8'>
        <div className='flex justify-between items-center w-full px-4'>
          <h1 className='font-bold text-xl'>Livros</h1>
          <div>
            <Button
              text='Adicionar Livro'
              color='bg-bgBtnDefault'
              onClick={() => { setModalIsOpen(true); setIdLivro(null); setActionType('create') }}
              type='button'
            />
          </div>
        </div>
        {getLoading ? <div>carregando...</div> : data.length > 0 ? (
        <>
          <Table
            data={data}
            setModalIsOpen={setModalIsOpen}
            setIdLivro={setIdLivro}
            setActionType={setActionType}
          />
          <div className='flex justify-center gap-4 items-center w-full'>
            <button className='bg-slate-500 h-8 w-8 rounded-xl' onClick={() => handlePage(page - 1)}>-</button>
            <span>{page}</span>
            <button className='bg-slate-500 h-8 w-8 rounded-xl' onClick={() => handlePage(page + 1)}>+</button>
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center flex-col gap-2 '>
          <GiWhiteBook className='text-9xl animate-pulse'/>
          <p>Nenhum Livro Encontrado...</p>
        </div>
      )}


        <Modal
          setModalIsOpen={setModalIsOpen}
          isOpen={modalIsOpen}>
          <FormLivro
            setLoading={setLoading}
            toast={toast}
            actionType={actionType}
            onClose={() => setModalIsOpen(false)}
            id={idLivro}
            refresh={fetch}
          />
        </Modal>
        <ToastContainer autoClose={2000} />

      </div>


    </>
  )
}

export default Home
