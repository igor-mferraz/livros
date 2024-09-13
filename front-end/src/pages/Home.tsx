import { useState } from 'react'
import { CardLivro } from '../components/card-livro'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-wrap justify-center items-center gap-4 p-6 w-full'>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
      <CardLivro/>
    </div>
  )
}

export default Home
