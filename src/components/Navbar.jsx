import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie } from 'react-icons/bi';

const Navbar = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return

    navigate(`/search?q=${search}`);
    setSearch('');
  }

  return (
    <nav className='navbar'>
      <h2>
        <Link to='/'>
          <BiCameraMovie />DeFilmes
        </Link>
      </h2>
      <form onSubmit={ handleSubmit }>
        <input 
          type='text'
          placeholder='Busque um filme'
          onChange={ (e) => (setSearch(e.target.value)) }
          value={ search }
        />
        <button type='submit'>Pesquisar</button>
      </form>
    </nav>
  )
}

export default Navbar;
