import livro from '../assets/livro2.jpg';

export const CardLivro = () => {
    return(
        <div className='flex flex-col r-8 w-60 '>
            
            <img className='h-60 w-full rounded-t-lg object-cover bg-white/5' src={livro} alt="" />
            
            <div className='rounded-b-lg flex-1 bg-white/5 p-2'>
                <p className='font-bold'>STORY BRAND</p>
                <p className='text-sm'>Claudio Zini</p>
                <p className='text-sm'>Lançamento: 12/09/2024</p>
                <p className='text-sm'>Local: Curitiba - PR</p>
            </div>
        </div>
    )
}