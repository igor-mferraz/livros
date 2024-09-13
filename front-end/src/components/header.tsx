import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
    return(
        <header className="flex border-b w-full justify-between p-2">
            <img className='w-8' src={logo}/>
            <div className="flex gap-4">
                <Link to='/'>Livros</Link>
                <Link to='/cadastro'>Cadastro</Link>
            </div>
        </header>
    )
}