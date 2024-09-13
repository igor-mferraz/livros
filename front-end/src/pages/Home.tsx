import { useState } from 'react'
import Table from '../components/Table'
import { Modal } from '../components/modal';

function Home() {
  const [count, setCount] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='flex flex-wrap justify-center items-center gap-4 w-full max-w-screen-2xl pt-4'>
      <Table
        setModalIsOpen={setModalIsOpen}
      />
      <Modal
        setModalIsOpen={setModalIsOpen}
        isOpen={modalIsOpen}/>
    </div>
  )
}

export default Home
